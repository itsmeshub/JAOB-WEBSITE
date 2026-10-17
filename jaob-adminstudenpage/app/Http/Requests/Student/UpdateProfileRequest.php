<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Students may only edit their own contact details — everything else
 * (name, class, category, etc.) is admin-only, since it originates from
 * the reviewed application. See README "Student profile editing" note.
 */
class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'max:255'],
            'mobile' => ['required', 'digits:10'],
            'address' => ['required', 'string', 'max:1000'],
        ];
    }
}
