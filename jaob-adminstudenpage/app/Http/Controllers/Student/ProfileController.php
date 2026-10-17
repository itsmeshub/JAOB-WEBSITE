<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\Student\UpdateProfileRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

/**
 * Students may edit their contact info only (email, mobile, address).
 * Everything else on the profile (name, class, category, etc.) came from
 * the reviewed application and is admin-only — see UpdateProfileRequest.
 */
class ProfileController extends Controller
{
    public function edit(): View
    {
        return view('student.profile', [
            'student' => Auth::guard('student')->user(),
        ]);
    }

    public function update(UpdateProfileRequest $request): RedirectResponse
    {
        Auth::guard('student')->user()->update($request->validated());

        return back()->with('success', 'Contact details updated.');
    }
}
