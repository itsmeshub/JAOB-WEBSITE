<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreFeeRequest;
use App\Models\Fee;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class FeeController extends Controller
{
    public function index(Request $request): View
    {
        $fees = Fee::query()
            ->with('student')
            ->when($request->query('student_id'), fn ($q, $id) => $q->where('student_id', $id))
            ->when($request->query('status'), fn ($q, $status) => $q->where('status', $status))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return view('admin.fees.index', [
            'fees' => $fees,
            'filters' => $request->only('student_id', 'status'),
        ]);
    }

    public function create(Request $request): View
    {
        return view('admin.fees.create', [
            'students' => Student::orderBy('full_name')->get(['id', 'full_name', 'student_number', 'class']),
            'preselectedStudentId' => $request->query('student_id'),
        ]);
    }

    public function store(StoreFeeRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if ($data['status'] === 'paid' && empty($data['transaction_id']) === false) {
            $data['paid_at'] = now();
        }

        $student = Student::findOrFail($data['student_id']);
        $data['application_id'] = $student->application_id;

        Fee::create($data);

        return redirect()->route('admin.fees.index')->with('success', 'Fee entry recorded.');
    }

    public function markPaid(Request $request, Fee $fee): RedirectResponse
    {
        $request->validate([
            'payment_method' => ['required', 'string', 'max:100'],
            'transaction_id' => ['required', 'string', 'max:255'],
        ]);

        $fee->update([
            'status' => 'paid',
            'payment_method' => $request->input('payment_method'),
            'transaction_id' => $request->input('transaction_id'),
            'paid_at' => now(),
        ]);

        return back()->with('success', 'Fee marked as paid.');
    }
}
