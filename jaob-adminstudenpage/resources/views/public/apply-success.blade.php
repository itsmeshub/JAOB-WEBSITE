@extends('layouts.base')

@section('title', 'Application Submitted')

@section('content')
<div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-2xl border border-secondary-200 p-8 text-center">
        <div class="mx-auto h-14 w-14 rounded-full bg-success-100 flex items-center justify-center text-success-600 text-2xl mb-4">
            &#10003;
        </div>
        <h1 class="text-xl font-bold text-secondary-900 mb-2">Application Submitted!</h1>
        <p class="text-sm text-secondary-600 mb-6">
            Thank you for applying to {{ config('app.institute.short_name') }}. Your application is now under
            review. Please keep your application number safe — you may need it for any follow-up.
        </p>

        @if ($applicationNumber)
            <div class="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
                <p class="text-xs text-secondary-500 mb-1">Your Application Number</p>
                <p class="font-mono font-bold text-lg text-secondary-900">{{ $applicationNumber }}</p>
            </div>
        @endif

        <p class="text-sm text-secondary-600 mb-6">
            Once your application is approved, you'll be given a Student ID and password to access your
            student dashboard — download your marksheet, admit card, and track fee status.
        </p>

        <a href="{{ url('/apply') }}" class="text-primary-600 text-sm font-medium hover:underline">
            &larr; Back to home
        </a>
    </div>
</div>
@endsection
