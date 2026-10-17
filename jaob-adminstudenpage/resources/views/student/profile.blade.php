@extends('layouts.student')

@section('title', 'My Profile')
@section('page-title', 'My Profile')

@section('student-content')
<div class="max-w-2xl space-y-6">

    <div class="bg-white rounded-xl border border-secondary-200 p-6">
        <h2 class="font-semibold text-secondary-900 mb-4">Profile Details</h2>
        <p class="text-xs text-secondary-500 mb-4">
            These details come from your approved application. To correct any of them, please contact the admin office.
        </p>
        <dl class="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div><dt class="text-secondary-500">Student ID</dt><dd class="text-secondary-900 font-medium font-mono">{{ $student->student_number }}</dd></div>
            <div><dt class="text-secondary-500">Full Name</dt><dd class="text-secondary-900 font-medium">{{ $student->full_name }}</dd></div>
            <div><dt class="text-secondary-500">Father's Name</dt><dd class="text-secondary-900 font-medium">{{ $student->father_name ?? '—' }}</dd></div>
            <div><dt class="text-secondary-500">Mother's Name</dt><dd class="text-secondary-900 font-medium">{{ $student->mother_name ?? '—' }}</dd></div>
            <div><dt class="text-secondary-500">Date of Birth</dt><dd class="text-secondary-900 font-medium">{{ $student->dob?->format('d M Y') ?? '—' }}</dd></div>
            <div><dt class="text-secondary-500">Class</dt><dd class="text-secondary-900 font-medium">{{ $student->class }}@if($student->stream) / {{ ucfirst($student->stream) }}@endif</dd></div>
        </dl>
    </div>

    <div class="bg-white rounded-xl border border-secondary-200 p-6">
        <h2 class="font-semibold text-secondary-900 mb-1">Contact Details</h2>
        <p class="text-xs text-secondary-500 mb-4">You can update these yourself at any time.</p>

        <form method="POST" action="{{ route('student.profile.update') }}" class="space-y-4">
            @csrf
            @method('PUT')
            <x-input name="email" label="Email" type="email" :value="$student->email" required />
            <x-input name="mobile" label="Mobile" :value="$student->mobile" required />
            <div>
                <label class="block text-sm font-medium text-secondary-700 mb-1">Address</label>
                <textarea name="address" rows="3" required
                          class="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">{{ old('address', $student->address) }}</textarea>
                @error('address')<p class="mt-1 text-xs text-error-600">{{ $message }}</p>@enderror
            </div>
            <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5">
                Save Contact Details
            </button>
        </form>
    </div>
</div>
@endsection
