<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Exam;
use App\Models\Fee;
use App\Models\Student;
use App\Services\PdfService;
use Symfony\Component\HttpFoundation\Response;

class PdfController extends Controller
{
    public function __construct(
        private readonly PdfService $pdf,
    ) {}

    public function marksheet(Student $student): Response
    {
        return $this->pdf->marksheet($student);
    }

    public function admitCard(Student $student, Exam $exam): Response
    {
        return $this->pdf->admitCard($student, $exam);
    }

    public function feeReceipt(Student $student, Fee $fee): Response
    {
        abort_unless($fee->student_id === $student->id, 404);

        return $this->pdf->feeReceipt($student, $fee);
    }
}
