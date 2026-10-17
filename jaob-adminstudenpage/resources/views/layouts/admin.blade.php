@extends('layouts.base')

@section('content')
<div x-data="{ sidebarOpen: false }" class="min-h-screen flex">

    {{-- Mobile overlay --}}
    <div x-show="sidebarOpen" x-cloak @click="sidebarOpen = false"
         class="fixed inset-0 bg-secondary-900/50 z-30 lg:hidden"></div>

    {{-- Sidebar --}}
    <aside :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
           class="fixed inset-y-0 left-0 z-40 w-64 bg-secondary-900 text-secondary-100 transform transition-transform duration-200 lg:static lg:translate-x-0 flex flex-col">
        <div class="h-16 flex items-center gap-3 px-6 border-b border-secondary-800">
            <div class="h-9 w-9 rounded-lg bg-primary-600 flex items-center justify-center font-bold text-white">
                {{ substr(config('app.institute.short_name'), 0, 1) }}
            </div>
            <div>
                <p class="font-semibold leading-tight">{{ config('app.institute.short_name') }}</p>
                <p class="text-xs text-secondary-400">Admin Panel</p>
            </div>
        </div>

        <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            @php
                $navItems = [
                    ['route' => 'admin.dashboard', 'label' => 'Dashboard', 'icon' => '&#9635;'],
                    ['route' => 'admin.applications.index', 'label' => 'Applications', 'icon' => '&#128196;'],
                    ['route' => 'admin.students.index', 'label' => 'Students', 'icon' => '&#127891;'],
                    ['route' => 'admin.exams.index', 'label' => 'Exams', 'icon' => '&#128197;'],
                    ['route' => 'admin.results.index', 'label' => 'Results', 'icon' => '&#128200;'],
                    ['route' => 'admin.fees.index', 'label' => 'Fees', 'icon' => '&#128176;'],
                ];
            @endphp
            @foreach ($navItems as $item)
                <a href="{{ route($item['route']) }}"
                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                          {{ request()->routeIs(explode('.index', $item['route'])[0].'*') || request()->routeIs($item['route'])
                                ? 'bg-primary-600 text-white'
                                : 'text-secondary-300 hover:bg-secondary-800 hover:text-white' }}">
                    <span class="text-base leading-none">{!! $item['icon'] !!}</span>
                    {{ $item['label'] }}
                </a>
            @endforeach
        </nav>

        <div class="border-t border-secondary-800 p-3">
            <div class="px-3 py-2 text-xs text-secondary-400">
                Logged in as<br>
                <span class="text-secondary-200 font-medium">{{ auth('admin')->user()->full_name }}</span>
            </div>
            <form method="POST" action="{{ route('admin.logout') }}">
                @csrf
                <button type="submit"
                        class="w-full text-left px-3 py-2 rounded-lg text-sm text-secondary-300 hover:bg-secondary-800 hover:text-white transition">
                    Log out
                </button>
            </form>
        </div>
    </aside>

    {{-- Main content --}}
    <div class="flex-1 flex flex-col min-w-0">
        <header class="h-16 bg-white border-b border-secondary-200 flex items-center justify-between px-4 lg:px-8">
            <button @click="sidebarOpen = true" class="lg:hidden text-secondary-600">
                &#9776;
            </button>
            <h1 class="text-lg font-semibold text-secondary-900">@yield('page-title', 'Dashboard')</h1>
            <div class="w-6 lg:hidden"></div>
        </header>

        <main class="flex-1 p-4 lg:p-8">
            @yield('admin-content')
        </main>
    </div>
</div>
@endsection
