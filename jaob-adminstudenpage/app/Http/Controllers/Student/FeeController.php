<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class FeeController extends Controller
{
    public function index(): View
    {
        $student = Auth::guard('student')->user();

        $fees = $student->fees()->latest()->get();

        return view('student.fees', [
            'fees' => $fees,
        ]);
    }
}
