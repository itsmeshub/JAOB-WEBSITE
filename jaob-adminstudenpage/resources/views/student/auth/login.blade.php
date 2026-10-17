@extends('layouts.guest')

@section('title', 'Student Login')

@section('guest-content')
    <h2 class="text-xl font-semibold text-secondary-900 mb-1">Student Login</h2>
    <p class="text-sm text-secondary-500 mb-6">
        Use the Student ID and password provided to you after your application was approved.
    </p>

    <form method="POST" action="{{ route('student.login.store') }}" class="space-y-4">
        @csrf

        <x-input name="student_number" label="Student ID" required autofocus autocomplete="username"
                 placeholder="JAOB-STU-2026-00001" />
        <x-input name="password" label="Password" type="password" required autocomplete="current-password" />

        <label class="flex items-center gap-2 text-sm text-secondary-600">
            <input type="checkbox" name="remember" class="rounded border-secondary-300 text-primary-600 focus:ring-primary-500">
            Remember me
        </label>

        <button type="submit"
                class="w-full rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 transition">
            Sign in
        </button>
    </form>

    <p class="mt-4 text-center text-sm">
        <a href="{{ route('student.forgot-password') }}" class="text-primary-600 hover:underline">Forgot your password?</a>
    </p>

    <div class="mt-6 pt-6 border-t border-secondary-100 text-center text-sm text-secondary-500 space-y-1">
        <p>Haven't applied yet? <a href="{{ url('/apply') }}" class="text-primary-600 font-medium hover:underline">Apply Online</a></p>
        <p>Admin? <a href="{{ route('admin.login') }}" class="text-secondary-500 hover:underline">Admin login</a></p>
    </div>
@endsection
