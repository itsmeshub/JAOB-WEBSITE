<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreExamRequest;
use App\Models\Exam;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ExamController extends Controller
{
    public function index(Request $request): View
    {
        $exams = Exam::query()
            ->when($request->query('class'), fn ($q, $class) => $q->where('class', $class))
            ->when($request->query('status'), fn ($q, $status) => $q->where('status', $status))
            ->orderByDesc('exam_date')
            ->paginate(15)
            ->withQueryString();

        return view('admin.exams.index', [
            'exams' => $exams,
            'filters' => $request->only('class', 'status'),
        ]);
    }

    public function create(): View
    {
        return view('admin.exams.create');
    }

    public function store(StoreExamRequest $request): RedirectResponse
    {
        Exam::create($request->validated());

        return redirect()->route('admin.exams.index')->with('success', 'Exam created.');
    }

    public function edit(Exam $exam): View
    {
        return view('admin.exams.edit', ['exam' => $exam]);
    }

    public function update(StoreExamRequest $request, Exam $exam): RedirectResponse
    {
        $exam->update($request->validated());

        return redirect()->route('admin.exams.index')->with('success', 'Exam updated.');
    }

    public function destroy(Exam $exam): RedirectResponse
    {
        $exam->delete();

        return back()->with('success', 'Exam deleted.');
    }
}
