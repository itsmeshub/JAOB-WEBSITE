@extends('layouts.guest')

@section('title', 'Admin Login')

@section('guest-content')
    <h2 class="text-xl font-semibold text-secondary-900 mb-1">Admin Login</h2>
    <p class="text-sm text-secondary-500 mb-6">Sign in to manage applications, students, exams and fees.</p>

    <form method="POST" action="{{ route('admin.login.store') }}" class="space-y-4">
        @csrf

        <x-input name="email" label="Email" type="email" required autofocus autocomplete="username" />
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

    <p class="mt-6 text-center text-sm text-secondary-500">
        Are you a student? <a href="{{ route('student.login') }}" class="text-primary-600 font-medium hover:underline">Student login</a>
    </p>
@endsection
