<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreExamRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'class' => ['required', 'in:10th,12th'],
            'subject' => ['required', 'string', 'max:255'],
            'exam_date' => ['required', 'date'],
            'start_time' => ['required'],
            'end_time' => ['required', 'after:start_time'],
            'venue' => ['required', 'string', 'max:255'],
            'status' => ['required', 'in:scheduled,completed,cancelled'],
        ];
    }
}
