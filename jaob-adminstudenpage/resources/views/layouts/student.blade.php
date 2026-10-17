@extends('layouts.base')

@section('content')
<div x-data="{ sidebarOpen: false }" class="min-h-screen flex">

    <div x-show="sidebarOpen" x-cloak @click="sidebarOpen = false"
         class="fixed inset-0 bg-secondary-900/50 z-30 lg:hidden"></div>

    <aside :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
           class="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-secondary-200 transform transition-transform duration-200 lg:static lg:translate-x-0 flex flex-col">
        <div class="h-16 flex items-center gap-3 px-6 border-b border-secondary-200">
            <div class="h-9 w-9 rounded-lg bg-primary-600 flex items-center justify-center font-bold text-white">
                {{ substr(config('app.institute.short_name'), 0, 1) }}
            </div>
            <div>
                <p class="font-semibold leading-tight text-secondary-900">{{ config('app.institute.short_name') }}</p>
                <p class="text-xs text-secondary-500">Student Dashboard</p>
            </div>
        </div>

        <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            @php
                $navItems = [
                    ['route' => 'student.dashboard', 'label' => 'Dashboard', 'icon' => '&#9635;'],
                    ['route' => 'student.results', 'label' => 'My Results', 'icon' => '&#128200;'],
                    ['route' => 'student.fees', 'label' => 'Fees', 'icon' => '&#128176;'],
                    ['route' => 'student.profile.edit', 'label' => 'My Profile', 'icon' => '&#128100;'],
                ];
            @endphp
            @foreach ($navItems as $item)
                <a href="{{ route($item['route']) }}"
                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                          {{ request()->routeIs($item['route'])
                                ? 'bg-primary-50 text-primary-700 border border-primary-100'
                                : 'text-secondary-600 hover:bg-secondary-50' }}">
                    <span class="text-base leading-none">{!! $item['icon'] !!}</span>
                    {{ $item['label'] }}
                </a>
            @endforeach
        </nav>

        <div class="border-t border-secondary-200 p-3">
            <div class="px-3 py-2 text-xs text-secondary-500">
                {{ auth('student')->user()->student_number }}<br>
                <span class="text-secondary-800 font-medium">{{ auth('student')->user()->full_name }}</span>
            </div>
            <form method="POST" action="{{ route('student.logout') }}">
                @csrf
                <button type="submit"
                        class="w-full text-left px-3 py-2 rounded-lg text-sm text-secondary-600 hover:bg-secondary-50 transition">
                    Log out
                </button>
            </form>
        </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0">
        <header class="h-16 bg-white border-b border-secondary-200 flex items-center justify-between px-4 lg:px-8">
            <button @click="sidebarOpen = true" class="lg:hidden text-secondary-600">&#9776;</button>
            <h1 class="text-lg font-semibold text-secondary-900">@yield('page-title', 'Dashboard')</h1>
            <div class="w-6 lg:hidden"></div>
        </header>

        <main class="flex-1 p-4 lg:p-8">
            @yield('student-content')
        </main>
    </div>
</div>
@endsection
