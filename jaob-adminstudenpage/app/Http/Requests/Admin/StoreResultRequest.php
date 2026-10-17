<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreResultRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'student_id' => ['required', 'exists:students,id'],
            'exam_id' => ['nullable', 'exists:exams,id'],
            'subject' => ['required', 'string', 'max:255'],
            'marks_obtained' => ['required', 'numeric', 'min:0'],
            'max_marks' => ['required', 'numeric', 'gt:0'],
            'grade' => ['nullable', 'string', 'max:5'],
            'result_status' => ['required', 'in:pass,fail'],
            'published' => ['sometimes', 'boolean'],
        ];
    }
}
