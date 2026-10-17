<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Exam;
use App\Models\Fee;
use App\Services\PdfService;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

/**
 * SECURITY: every method here resolves the student strictly from the
 * authenticated session (`auth:student` guard) — never from a route
 * parameter or request input. Combined with the ownership checks below,
 * a logged-in student can never fetch another student's PDF by editing
 * a URL/ID, per the spec's security requirement.
 */
class DocumentController extends Controller
{
    public function __construct(
        private readonly PdfService $pdf,
    ) {}

    public function marksheet(): Response
    {
        return $this->pdf->marksheet(Auth::guard('student')->user());
    }

    public function admitCard(Exam $exam): Response
    {
        $student = Auth::guard('student')->user();

        abort_unless($exam->class === $student->class && $exam->status === 'scheduled', 404);

        return $this->pdf->admitCard($student, $exam);
    }

    public function feeReceipt(Fee $fee): Response
    {
        $student = Auth::guard('student')->user();

        abort_unless($fee->student_id === $student->id, 404);
        abort_unless($fee->isPaid(), 404);

        return $this->pdf->feeReceipt($student, $fee);
    }
}
