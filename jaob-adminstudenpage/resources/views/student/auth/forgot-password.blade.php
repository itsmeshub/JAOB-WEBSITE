@extends('layouts.guest')

@section('title', 'Forgot Password')

@section('guest-content')
    <h2 class="text-xl font-semibold text-secondary-900 mb-1">Forgot your password?</h2>
    <p class="text-sm text-secondary-600 mb-6 leading-relaxed">
        For security, student passwords can only be reset by the {{ config('app.institute.short_name') }} admin
        office — there's no automatic self-service reset. Please contact the admin office (in person, by phone,
        or by email) with your Student ID and they will issue you a new password.
    </p>

    <div class="rounded-lg bg-secondary-50 border border-secondary-200 p-4 text-sm text-secondary-600 mb-6">
        <p class="font-medium text-secondary-800 mb-1">What to have ready:</p>
        <ul class="list-disc list-inside space-y-0.5">
            <li>Your Student ID (e.g. JAOB-STU-2026-00001)</li>
            <li>Your full name as on your application</li>
        </ul>
    </div>

    <a href="{{ route('student.login') }}"
       class="block w-full text-center rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 transition">
        Back to login
    </a>
@endsection
