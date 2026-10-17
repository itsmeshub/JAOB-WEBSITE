@extends('layouts.student')

@section('title', 'Dashboard')
@section('page-title', 'Welcome, '.explode(' ', $student->full_name)[0])

@section('student-content')
<div class="grid sm:grid-cols-3 gap-4 mb-8">
    <div class="bg-white rounded-xl border border-secondary-200 p-5">
        <p class="text-xs font-medium text-secondary-500 uppercase tracking-wide">Class</p>
        <p class="mt-2 text-xl font-bold text-secondary-900">{{ $student->class }}@if($student->stream) · {{ ucfirst($student->stream) }}@endif</p>
    </div>
    <div class="bg-white rounded-xl border border-secondary-200 p-5">
        <p class="text-xs font-medium text-secondary-500 uppercase tracking-wide">Published Results</p>
        <p class="mt-2 text-xl font-bold text-primary-600">{{ $publishedResultsCount }}</p>
    </div>
    <div class="bg-white rounded-xl border border-secondary-200 p-5">
        <p class="text-xs font-medium text-secondary-500 uppercase tracking-wide">Account Status</p>
        <p class="mt-2"><x-badge :status="$student->status" /></p>
    </div>
</div>

<div class="grid lg:grid-cols-2 gap-6">
    <div class="bg-white rounded-xl border border-secondary-200 p-6">
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-secondary-900">Upcoming Exams</h3>
            <a href="{{ route('student.results') }}" class="text-sm text-primary-600 hover:underline">My Results &rarr;</a>
        </div>
        @forelse ($upcomingExams as $exam)
            <div class="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                <div>
                    <p class="text-sm font-medium text-secondary-900">{{ $exam->title }}</p>
                    <p class="text-xs text-secondary-500">{{ $exam->subject }} · {{ $exam->exam_date->format('d M Y') }} · {{ $exam->venue }}</p>
                </div>
                <a href="{{ route('student.admit-card.download', $exam) }}" class="text-xs font-medium text-primary-600 hover:underline whitespace-nowrap">
                    Admit Card &darr;
                </a>
            </div>
        @empty
            <p class="text-sm text-secondary-400">No upcoming exams scheduled.</p>
        @endforelse
    </div>

    <div class="bg-white rounded-xl border border-secondary-200 p-6">
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-secondary-900">Recent Fees</h3>
            <a href="{{ route('student.fees') }}" class="text-sm text-primary-600 hover:underline">View all &rarr;</a>
        </div>
        @forelse ($recentFees as $fee)
            <div class="flex items-center justify-between py-3 border-b border-secondary-100 last:border-0">
                <div>
                    <p class="text-sm font-medium text-secondary-900">{{ $fee->fee_type }}</p>
                    <p class="text-xs text-secondary-500">₹{{ number_format($fee->amount, 2) }}</p>
                </div>
                <x-badge :status="$fee->status" />
            </div>
        @empty
            <p class="text-sm text-secondary-400">No fee records yet.</p>
        @endforelse
    </div>
</div>

<div class="mt-6 bg-primary-50 border border-primary-100 rounded-xl p-5 flex items-center justify-between flex-wrap gap-3">
    <p class="text-sm text-primary-800">Need your marksheet for a form or scholarship application?</p>
    <a href="{{ route('student.marksheet.download') }}" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2">
        Download Marksheet (PDF)
    </a>
</div>
@endsection
