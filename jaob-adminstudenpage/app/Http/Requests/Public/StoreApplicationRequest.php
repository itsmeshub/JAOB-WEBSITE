<?php

namespace App\Http\Requests\Public;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // public form, no login required
    }

    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:255'],
            'father_name' => ['required', 'string', 'max:255'],
            'mother_name' => ['required', 'string', 'max:255'],
            'dob' => ['required', 'date', 'before:today'],
            'gender' => ['required', 'in:male,female,other'],
            'email' => ['required', 'email', 'max:255'],
            'mobile' => ['required', 'digits:10'],
            'address' => ['required', 'string', 'max:1000'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'pincode' => ['required', 'digits:6'],

            'class' => ['required', 'in:10th,12th'],
            'stream' => ['nullable', 'required_if:class,12th', 'in:science,commerce,arts'],
            'category' => ['nullable', 'string', 'max:100'],
            'previous_qualification' => ['nullable', 'string', 'max:255'],
            'previous_school' => ['nullable', 'string', 'max:255'],

            'photo' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:5120'],

            'documents' => ['nullable', 'array'],
            'documents.*' => ['file', 'mimes:pdf,jpg,jpeg,png', 'max:5120'],
            'document_types' => ['nullable', 'array'],
            'document_types.*' => ['nullable', 'string', 'max:100'],
        ];
    }

    public function messages(): array
    {
        return [
            'mobile.digits' => 'Enter a valid 10-digit mobile number.',
            'pincode.digits' => 'Enter a valid 6-digit PIN code.',
            'documents.*.max' => 'Each document must be 5MB or smaller.',
            'photo.max' => 'Photo must be 5MB or smaller.',
        ];
    }
}
