<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateStudentRequest;
use App\Models\Student;
use App\Services\StudentOnboardingService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class StudentController extends Controller
{
    public function __construct(
        private readonly StudentOnboardingService $onboarding,
    ) {}

    public function index(Request $request): View
    {
        $students = Student::query()
            ->when($request->query('q'), function ($q, $term) {
                $q->where(function ($q) use ($term) {
                    $q->where('full_name', 'like', "%{$term}%")
                        ->orWhere('student_number', 'like', "%{$term}%")
                        ->orWhere('email', 'like', "%{$term}%")
                        ->orWhere('mobile', 'like', "%{$term}%");
                });
            })
            ->when($request->query('class'), fn ($q, $class) => $q->where('class', $class))
            ->when($request->query('status'), fn ($q, $status) => $q->where('status', $status))
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return view('admin.students.index', [
            'students' => $students,
            'filters' => $request->only('q', 'class', 'status'),
        ]);
    }

    public function show(Student $student): View
    {
        $student->load('results.exam', 'fees');

        return view('admin.students.show', [
            'student' => $student,
        ]);
    }

    public function update(UpdateStudentRequest $request, Student $student): RedirectResponse
    {
        $student->update($request->validated());

        return back()->with('success', 'Student profile updated.');
    }

    public function resetPassword(Student $student): RedirectResponse
    {
        $plainPassword = $this->onboarding->resetPassword($student);

        return back()
            ->with('newPassword', $plainPassword)
            ->with('success', "New password generated for {$student->student_number}.");
    }

    public function toggleStatus(Student $student): RedirectResponse
    {
        $student->update([
            'status' => $student->status === 'active' ? 'inactive' : 'active',
        ]);

        return back()->with('success', "Student marked as {$student->status}.");
    }
}
