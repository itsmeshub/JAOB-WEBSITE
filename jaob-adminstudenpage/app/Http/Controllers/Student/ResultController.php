<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class ResultController extends Controller
{
    public function index(): View
    {
        $student = Auth::guard('student')->user();

        $results = $student->publishedResults()->with('exam')->orderBy('subject')->get();

        $totalObtained = $results->sum('marks_obtained');
        $totalMax = $results->sum('max_marks');
        $percentage = $totalMax > 0 ? round(($totalObtained / $totalMax) * 100, 2) : 0;

        return view('student.results', [
            'results' => $results,
            'totalObtained' => $totalObtained,
            'totalMax' => $totalMax,
            'percentage' => $percentage,
        ]);
    }
}
