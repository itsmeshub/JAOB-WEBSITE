<?php

namespace App\Services;

use App\Models\Exam;
use App\Models\Fee;
use App\Models\Student;
use Barryvdh\DomPDF\Facade\Pdf;
use Symfony\Component\HttpFoundation\Response;

/**
 * Renders the three PDF documents required by the spec. Each method returns
 * a downloadable Response, used identically by the admin controllers
 * (preview/download for any student) and the student controllers
 * (download for themselves only — the calling controller is responsible
 * for that authorization check, this service does not know who is asking).
 */
class PdfService
{
    public function marksheet(Student $student): Response
    {
        $results = $student->publishedResults()->orderBy('subject')->get();

        $totalObtained = $results->sum('marks_obtained');
        $totalMax = $results->sum('max_marks');
        $percentage = $totalMax > 0 ? round(($totalObtained / $totalMax) * 100, 2) : 0;

        $pdf = Pdf::loadView('pdf.marksheet', [
            'student' => $student,
            'results' => $results,
            'totalObtained' => $totalObtained,
            'totalMax' => $totalMax,
            'percentage' => $percentage,
            'institute' => config('app.institute'),
        ]);

        return $pdf->download("Marksheet-{$student->student_number}.pdf");
    }

    public function admitCard(Student $student, Exam $exam): Response
    {
        $pdf = Pdf::loadView('pdf.admit-card', [
            'student' => $student,
            'exam' => $exam,
            'institute' => config('app.institute'),
        ]);

        return $pdf->download("AdmitCard-{$student->student_number}-{$exam->id}.pdf");
    }

    public function feeReceipt(Student $student, Fee $fee): Response
    {
        $pdf = Pdf::loadView('pdf.fee-receipt', [
            'student' => $student,
            'fee' => $fee,
            'institute' => config('app.institute'),
        ]);

        return $pdf->download("FeeReceipt-{$student->student_number}-{$fee->id}.pdf");
    }
}
