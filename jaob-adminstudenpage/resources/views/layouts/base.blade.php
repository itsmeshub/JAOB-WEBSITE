<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'JAOB') · {{ config('app.institute.short_name') }} Dashboard</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Tailwind via CDN with the JAOB site's exact color tokens (see tailwind.config.js
         on the main React site). No Node build step needed on shared hosting — see
         README "Switching Tailwind to a compiled build" if you'd rather build it. --}}
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#ecfdf5', 100: '#d1fae6', 200: '#a7f3d0', 300: '#6ee7b7',
                            400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
                            800: '#065f46', 900: '#064e3b', 950: '#022c22',
                        },
                        secondary: {
                            50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
                            400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
                            800: '#1e293b', 900: '#0f172a', 950: '#020617',
                        },
                        accent: {
                            50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047',
                            400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207',
                        },
                        success: { 50: '#f0fdf4', 100: '#dcfce7', 600: '#16a34a', 700: '#15803d' },
                        warning: { 50: '#fff7ed', 100: '#ffedd5', 600: '#ea580c', 700: '#c2410c' },
                        error:   { 50: '#fef2f2', 100: '#fee2e2', 600: '#dc2626', 700: '#b91c1c' },
                    },
                    fontFamily: {
                        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    },
                },
            },
        }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }</style>

    @stack('head')
</head>
<body class="h-full bg-secondary-50 text-secondary-900 antialiased">

    @if (session('success'))
        <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 5000)"
             class="fixed top-4 right-4 z-50 max-w-sm rounded-lg bg-success-50 border border-success-200 text-success-700 px-4 py-3 shadow-lg">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 5000)"
             class="fixed top-4 right-4 z-50 max-w-sm rounded-lg bg-error-50 border border-error-200 text-error-700 px-4 py-3 shadow-lg">
            {{ session('error') }}
        </div>
    @endif

    @yield('content')

    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @stack('scripts')
</body>
</html>
