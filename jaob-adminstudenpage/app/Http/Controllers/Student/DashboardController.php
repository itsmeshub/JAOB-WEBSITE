<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        $student = Auth::guard('student')->user();

        $publishedResultsCount = $student->publishedResults()->count();
        $upcomingExams = $student->exams()->where('exam_date', '>=', now())->take(3)->get();
        $recentFees = $student->fees()->latest()->take(3)->get();

        return view('student.dashboard', [
            'student' => $student,
            'publishedResultsCount' => $publishedResultsCount,
            'upcomingExams' => $upcomingExams,
            'recentFees' => $recentFees,
        ]);
    }
}
