@props(['status'])

@php
    $styles = match($status) {
        'pending' => 'bg-warning-50 text-warning-700 border-warning-200',
        'approved', 'active', 'paid', 'scheduled', 'pass' => 'bg-success-50 text-success-700 border-success-200',
        'rejected', 'inactive', 'failed', 'cancelled', 'fail' => 'bg-error-50 text-error-700 border-error-200',
        'completed' => 'bg-secondary-100 text-secondary-700 border-secondary-200',
        default => 'bg-secondary-100 text-secondary-700 border-secondary-200',
    };
@endphp

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border {{ $styles }} capitalize">
    {{ $status }}
</span>
