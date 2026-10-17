<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreResultRequest;
use App\Models\Exam;
use App\Models\Result;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ResultController extends Controller
{
    public function index(Request $request): View
    {
        $results = Result::query()
            ->with(['student', 'exam'])
            ->when($request->query('student_id'), fn ($q, $id) => $q->where('student_id', $id))
            ->when($request->query('class'), fn ($q, $class) => $q->whereHas('student', fn ($q) => $q->where('class', $class)))
            ->when($request->query('published') !== null && $request->query('published') !== '', function ($q) use ($request) {
                $q->where('published', $request->boolean('published'));
            })
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('admin.results.index', [
            'results' => $results,
            'filters' => $request->only('student_id', 'class', 'published'),
        ]);
    }

    public function create(Request $request): View
    {
        return view('admin.results.create', [
            'students' => Student::orderBy('full_name')->get(['id', 'full_name', 'student_number', 'class']),
            'exams' => Exam::orderByDesc('exam_date')->get(['id', 'title', 'subject', 'class']),
            'preselectedStudentId' => $request->query('student_id'),
        ]);
    }

    public function store(StoreResultRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (empty($data['grade'])) {
            $percentage = $data['max_marks'] > 0
                ? ($data['marks_obtained'] / $data['max_marks']) * 100
                : 0;
            $data['grade'] = Result::gradeFor($percentage);
        }

        $data['published'] = $request->boolean('published');

        Result::create($data);

        return redirect()->route('admin.results.index')->with('success', 'Result entered.');
    }

    public function edit(Result $result): View
    {
        return view('admin.results.edit', [
            'result' => $result,
            'students' => Student::orderBy('full_name')->get(['id', 'full_name', 'student_number', 'class']),
            'exams' => Exam::orderByDesc('exam_date')->get(['id', 'title', 'subject', 'class']),
        ]);
    }

    public function update(StoreResultRequest $request, Result $result): RedirectResponse
    {
        $data = $request->validated();
        $data['published'] = $request->boolean('published');

        $result->update($data);

        return redirect()->route('admin.results.index')->with('success', 'Result updated.');
    }

    public function togglePublish(Result $result): RedirectResponse
    {
        $result->update(['published' => ! $result->published]);

        return back()->with('success', $result->published ? 'Result published.' : 'Result unpublished.');
    }

    public function destroy(Result $result): RedirectResponse
    {
        $result->delete();

        return back()->with('success', 'Result deleted.');
    }
}
