@extends('layouts.base')

@section('content')
<div class="min-h-screen flex flex-col items-center justify-center px-4 py-12">
    <div class="mb-8 text-center">
        <div class="mx-auto h-14 w-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary-600/20">
            {{ substr(config('app.institute.short_name'), 0, 1) }}
        </div>
        <h1 class="mt-4 text-2xl font-bold text-secondary-900">{{ config('app.institute.short_name') }}</h1>
        <p class="text-sm text-secondary-500">{{ config('app.institute.full_name') }}</p>
    </div>

    <div class="w-full max-w-md bg-white rounded-2xl shadow-sm border border-secondary-200 p-8">
        @yield('guest-content')
    </div>

    <p class="mt-6 text-sm text-secondary-400">
        <a href="{{ url('/apply') }}" class="hover:text-primary-600 hover:underline">&larr; Back to Apply Online</a>
    </p>
</div>
@endsection
