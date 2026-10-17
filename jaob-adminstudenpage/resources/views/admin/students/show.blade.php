@extends('layouts.admin')

@section('title', $student->full_name)
@section('page-title', 'Student Profile')

@section('admin-content')

@if (session('newPassword'))
    <div class="mb-6 rounded-xl border-2 border-primary-300 bg-primary-50 p-5">
        <h3 class="font-semibold text-primary-800 mb-1">Password reset ✓</h3>
        <p class="text-sm text-primary-700 mb-3">Shown once — share this with the student securely:</p>
        <div class="bg-white rounded-lg border border-primary-200 p-3 inline-block">
            <p class="font-mono font-semibold text-secondary-900">{{ session('newPassword') }}</p>
        </div>
    </div>
@endif

<div class="grid lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 space-y-6">

        <div class="bg-white rounded-xl border border-secondary-200 p-6">
            <div class="flex items-start justify-between mb-4">
                <div>
                    <p class="text-xs font-mono text-secondary-400">{{ $student->student_number }}</p>
                    <h2 class="text-xl font-bold text-secondary-900">{{ $student->full_name }}</h2>
                </div>
                <x-badge :status="$student->status" />
            </div>

            <form method="POST" action="{{ route('admin.students.update', $student) }}" class="space-y-4">
                @csrf
                @method('PUT')

                <div class="grid sm:grid-cols-2 gap-4">
                    <x-input name="full_name" label="Full Name" :value="$student->full_name" required />
                    <x-input name="father_name" label="Father's Name" :value="$student->father_name" />
                    <x-input name="mother_name" label="Mother's Name" :value="$student->mother_name" />
                    <x-input name="dob" label="Date of Birth" type="date" :value="$student->dob?->format('Y-m-d')" />
                    <x-select name="gender" label="Gender" :value="$student->gender"
                              :options="['male' => 'Male', 'female' => 'Female', 'other' => 'Other']" />
                    <x-input name="email" label="Email" type="email" :value="$student->email" />
                    <x-input name="mobile" label="Mobile" :value="$student->mobile" />
                    <x-select name="class" label="Class" :value="$student->class" required
                              :options="['10th' => '10th', '12th' => '12th']" />
                    <x-select name="stream" label="Stream" :value="$student->stream"
                              :options="['science' => 'Science', 'commerce' => 'Commerce', 'arts' => 'Arts']" />
                    <x-input name="category" label="Category" :value="$student->category" />
                    <x-select name="status" label="Status" :value="$student->status" required
                              :options="['active' => 'Active', 'inactive' => 'Inactive']" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-secondary-700 mb-1">Address</label>
                    <textarea name="address" rows="2" class="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">{{ old('address', $student->address) }}</textarea>
                </div>

                <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5">
                    Save Changes
                </button>
            </form>
        </div>

        <div class="bg-white rounded-xl border border-secondary-200 p-6">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-semibold text-secondary-900">Results</h3>
                <a href="{{ route('admin.results.create', ['student_id' => $student->id]) }}" class="text-sm text-primary-600 hover:underline">+ Add Result</a>
            </div>
            <table class="w-full text-sm">
                <thead>
                    <tr class="text-left text-secondary-500 border-b border-secondary-100">
                        <th class="py-2 font-medium">Subject</th>
                        <th class="py-2 font-medium">Marks</th>
                        <th class="py-2 font-medium">Grade</th>
                        <th class="py-2 font-medium">Published</th>
                        <th class="py-2"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-secondary-100">
                    @forelse ($student->results as $result)
                        <tr>
                            <td class="py-2 text-secondary-900">{{ $result->subject }}</td>
                            <td class="py-2 text-secondary-600">{{ $result->marks_obtained }}/{{ $result->max_marks }}</td>
                            <td class="py-2 text-secondary-600">{{ $result->grade }}</td>
                            <td class="py-2">
                                <span class="text-xs {{ $result->published ? 'text-success-600' : 'text-secondary-400' }}">
                                    {{ $result->published ? 'Published' : 'Draft' }}
                                </span>
                            </td>
                            <td class="py-2 text-right">
                                <a href="{{ route('admin.results.edit', $result) }}" class="text-primary-600 hover:underline text-xs">Edit</a>
                            </td>
                        </tr>
                    @empty
                        <tr><td colspan="5" class="py-6 text-center text-secondary-400">No results entered yet.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="bg-white rounded-xl border border-secondary-200 p-6">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-semibold text-secondary-900">Fees</h3>
                <a href="{{ route('admin.fees.create', ['student_id' => $student->id]) }}" class="text-sm text-primary-600 hover:underline">+ Add Fee Entry</a>
            </div>
            <table class="w-full text-sm">
                <thead>
                    <tr class="text-left text-secondary-500 border-b border-secondary-100">
                        <th class="py-2 font-medium">Type</th>
                        <th class="py-2 font-medium">Amount</th>
                        <th class="py-2 font-medium">Status</th>
                        <th class="py-2"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-secondary-100">
                    @forelse ($student->fees as $fee)
                        <tr>
                            <td class="py-2 text-secondary-900">{{ $fee->fee_type }}</td>
                            <td class="py-2 text-secondary-600">₹{{ number_format($fee->amount, 2) }}</td>
                            <td class="py-2"><x-badge :status="$fee->status" /></td>
                            <td class="py-2 text-right">
                                @if ($fee->isPaid())
                                    <a href="{{ route('admin.students.fee-receipt', [$student, $fee]) }}" class="text-primary-600 hover:underline text-xs">Receipt</a>
                                @endif
                            </td>
                        </tr>
                    @empty
                        <tr><td colspan="4" class="py-6 text-center text-secondary-400">No fee entries yet.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    <div class="space-y-6">
        <div class="bg-white rounded-xl border border-secondary-200 p-5 space-y-3">
            <h3 class="font-semibold text-secondary-900 mb-1">Account Actions</h3>

            <form method="POST" action="{{ route('admin.students.reset-password', $student) }}"
                  onsubmit="return confirm('Generate a new password for this student? The old one will stop working immediately.');">
                @csrf
                <button type="submit" class="w-full rounded-lg border border-secondary-300 hover:bg-secondary-50 text-sm font-medium py-2.5 text-secondary-700">
                    Reset Password
                </button>
            </form>

            <form method="POST" action="{{ route('admin.students.toggle-status', $student) }}">
                @csrf
                <button type="submit" class="w-full rounded-lg border {{ $student->status === 'active' ? 'border-error-300 text-error-600 hover:bg-error-50' : 'border-success-300 text-success-600 hover:bg-success-50' }} text-sm font-medium py-2.5">
                    {{ $student->status === 'active' ? 'Deactivate Account' : 'Activate Account' }}
                </button>
            </form>
        </div>

        <div class="bg-white rounded-xl border border-secondary-200 p-5 space-y-2">
            <h3 class="font-semibold text-secondary-900 mb-2">Documents</h3>
            <a href="{{ route('admin.students.marksheet', $student) }}" class="block text-sm text-primary-600 hover:underline">Download Marksheet (PDF)</a>
            @foreach ($student->exams()->get() as $exam)
                <a href="{{ route('admin.students.admit-card', [$student, $exam]) }}" class="block text-sm text-primary-600 hover:underline">
                    Admit Card — {{ $exam->title }}
                </a>
            @endforeach
        </div>

        <a href="{{ route('admin.students.index') }}" class="block text-center text-sm text-secondary-500 hover:underline">&larr; Back to all students</a>
    </div>
</div>
@endsection
