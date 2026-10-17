<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\Student\LoginRequest;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function create(): View
    {
        return view('student.auth.login');
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->ensureIsNotRateLimited();

        $student = Student::where('student_number', $request->input('student_number'))->first();

        if (! $student || ! Hash::check($request->input('password'), $student->password)) {
            RateLimiter::hit($request->throttleKey());

            return back()
                ->onlyInput('student_number')
                ->withErrors(['student_number' => 'These credentials do not match our records.']);
        }

        if (! $student->isActive()) {
            RateLimiter::hit($request->throttleKey());

            return back()
                ->onlyInput('student_number')
                ->withErrors(['student_number' => 'Your account has been deactivated. Please contact the admin office.']);
        }

        RateLimiter::clear($request->throttleKey());
        Auth::guard('student')->login($student, $request->boolean('remember'));
        $request->session()->regenerate();

        return redirect()->intended(route('student.dashboard'));
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('student')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('student.login');
    }

    public function forgotPassword(): View
    {
        return view('student.auth.forgot-password');
    }
}
