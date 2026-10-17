@extends('layouts.admin')

@section('title', 'Application · '.$application->application_number)
@section('page-title', 'Review Application')

@section('admin-content')

@if (session('newCredentials'))
    <div class="mb-6 rounded-xl border-2 border-primary-300 bg-primary-50 p-5">
        <h3 class="font-semibold text-primary-800 mb-1">Student account created ✓</h3>
        <p class="text-sm text-primary-700 mb-4">
            These credentials are shown <strong>once, right now</strong> — they are not stored anywhere in
            plain text and cannot be viewed again. Share them with the student securely, or use the
            "Reset Password" button on their profile later if they lose them.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-white rounded-lg border border-primary-200 p-3">
                <p class="text-xs text-secondary-500 mb-1">Student ID</p>
                <p class="font-mono font-semibold text-secondary-900">{{ session('newCredentials')['student_number'] }}</p>
            </div>
            <div class="bg-white rounded-lg border border-primary-200 p-3">
                <p class="text-xs text-secondary-500 mb-1">Password</p>
                <p class="font-mono font-semibold text-secondary-900">{{ session('newCredentials')['password'] }}</p>
            </div>
        </div>
    </div>
@endif

@if (session('newPassword'))
    <div class="mb-6 rounded-xl border-2 border-primary-300 bg-primary-50 p-5">
        <h3 class="font-semibold text-primary-800 mb-1">Password reset ✓</h3>
        <p class="text-sm text-primary-700 mb-3">New password (shown once):</p>
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
                    <p class="text-xs font-mono text-secondary-400">{{ $application->application_number }}</p>
                    <h2 class="text-xl font-bold text-secondary-900">{{ $application->full_name }}</h2>
                </div>
                <x-badge :status="$application->status" />
            </div>

            <dl class="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div><dt class="text-secondary-500">Father's Name</dt><dd class="text-secondary-900 font-medium">{{ $application->father_name }}</dd></div>
                <div><dt class="text-secondary-500">Mother's Name</dt><dd class="text-secondary-900 font-medium">{{ $application->mother_name }}</dd></div>
                <div><dt class="text-secondary-500">Date of Birth</dt><dd class="text-secondary-900 font-medium">{{ $application->dob->format('d M Y') }}</dd></div>
                <div><dt class="text-secondary-500">Gender</dt><dd class="text-secondary-900 font-medium capitalize">{{ $application->gender }}</dd></div>
                <div><dt class="text-secondary-500">Email</dt><dd class="text-secondary-900 font-medium">{{ $application->email }}</dd></div>
                <div><dt class="text-secondary-500">Mobile</dt><dd class="text-secondary-900 font-medium">{{ $application->mobile }}</dd></div>
                <div class="sm:col-span-2"><dt class="text-secondary-500">Address</dt><dd class="text-secondary-900 font-medium">{{ $application->address }}, {{ $application->city }}, {{ $application->state }} - {{ $application->pincode }}</dd></div>
                <div><dt class="text-secondary-500">Class</dt><dd class="text-secondary-900 font-medium">{{ $application->class }}</dd></div>
                @if ($application->stream)
                    <div><dt class="text-secondary-500">Stream</dt><dd class="text-secondary-900 font-medium capitalize">{{ $application->stream }}</dd></div>
                @endif
                @if ($application->category)
                    <div><dt class="text-secondary-500">Category</dt><dd class="text-secondary-900 font-medium">{{ $application->category }}</dd></div>
                @endif
                @if ($application->previous_school)
                    <div><dt class="text-secondary-500">Previous School</dt><dd class="text-secondary-900 font-medium">{{ $application->previous_school }}</dd></div>
                @endif
                @if ($application->previous_qualification)
                    <div><dt class="text-secondary-500">Previous Qualification</dt><dd class="text-secondary-900 font-medium">{{ $application->previous_qualification }}</dd></div>
                @endif
            </dl>
        </div>

        <div class="bg-white rounded-xl border border-secondary-200 p-6">
            <h3 class="font-semibold text-secondary-900 mb-4">Uploaded Documents</h3>
            @if ($application->photo_path)
                <div class="mb-4">
                    <p class="text-xs text-secondary-500 mb-2">Photo</p>
                    <img src="{{ asset('storage/'.$application->photo_path) }}" alt="Applicant photo"
                         class="h-28 w-28 object-cover rounded-lg border border-secondary-200">
                </div>
            @endif
            @forelse ($application->documents as $doc)
                <a href="{{ asset('storage/'.$doc->file_path) }}" target="_blank"
                   class="flex items-center justify-between px-4 py-3 rounded-lg border border-secondary-200 hover:bg-secondary-50 mb-2 text-sm">
                    <span class="text-secondary-800"><span class="font-medium capitalize">{{ str_replace('_', ' ', $doc->doc_type) }}</span> — {{ $doc->file_name }}</span>
                    <span class="text-primary-600">View &rarr;</span>
                </a>
            @empty
                <p class="text-sm text-secondary-400">No additional documents uploaded.</p>
            @endforelse
        </div>

        @if ($application->status === 'rejected' && $application->remarks)
            <div class="bg-error-50 border border-error-200 rounded-xl p-4 text-sm text-error-700">
                <strong>Rejection remarks:</strong> {{ $application->remarks }}
            </div>
        @endif

        @if ($application->student)
            <div class="bg-primary-50 border border-primary-200 rounded-xl p-4 text-sm">
                <p class="text-primary-800">
                    Linked student account: <strong>{{ $application->student->student_number }}</strong>
                    (<a href="{{ route('admin.students.show', $application->student) }}" class="underline">view profile</a>)
                </p>
            </div>
        @endif
    </div>

    <div class="space-y-6">
        @if ($application->isPending())
            <div class="bg-white rounded-xl border border-secondary-200 p-5">
                <h3 class="font-semibold text-secondary-900 mb-3">Decision</h3>

                <form method="POST" action="{{ route('admin.applications.approve', $application) }}" class="mb-4"
                      onsubmit="return confirm('Approve this application and create a student account?');">
                    @csrf
                    <button type="submit" class="w-full rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 transition">
                        Approve &amp; Create Student
                    </button>
                </form>

                <details>
                    <summary class="cursor-pointer text-sm text-error-600 font-medium">Reject application</summary>
                    <form method="POST" action="{{ route('admin.applications.reject', $application) }}" class="mt-3 space-y-3">
                        @csrf
                        <textarea name="remarks" rows="3" placeholder="Reason for rejection (shown internally only)"
                                  class="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-error-400" required></textarea>
                        @error('remarks')<p class="text-xs text-error-600">{{ $message }}</p>@enderror
                        <button type="submit" class="w-full rounded-lg bg-error-600 hover:bg-error-700 text-white text-sm font-medium py-2">
                            Confirm Rejection
                        </button>
                    </form>
                </details>
            </div>
        @endif

        <div class="bg-white rounded-xl border border-secondary-200 p-5 text-sm space-y-2">
            <h3 class="font-semibold text-secondary-900 mb-2">Review Info</h3>
            <p class="text-secondary-500">Submitted: <span class="text-secondary-800">{{ $application->created_at->format('d M Y, h:i A') }}</span></p>
            @if ($application->reviewed_at)
                <p class="text-secondary-500">Reviewed: <span class="text-secondary-800">{{ $application->reviewed_at->format('d M Y, h:i A') }}</span></p>
                <p class="text-secondary-500">By: <span class="text-secondary-800">{{ $application->reviewer?->full_name ?? '—' }}</span></p>
            @endif
        </div>

        <a href="{{ route('admin.applications.index') }}" class="block text-center text-sm text-secondary-500 hover:underline">&larr; Back to all applications</a>
    </div>
</div>
@endsection
