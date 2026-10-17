@extends('layouts.admin')

@section('title', 'Dashboard')
@section('page-title', 'Dashboard')

@section('admin-content')
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    @php
        $cards = [
            ['label' => 'Total Applications', 'value' => $stats['total_applications'], 'accent' => 'primary'],
            ['label' => 'Pending Review', 'value' => $stats['pending_applications'], 'accent' => 'warning'],
            ['label' => 'Approved', 'value' => $stats['approved_applications'], 'accent' => 'success'],
            ['label' => 'Rejected', 'value' => $stats['rejected_applications'], 'accent' => 'error'],
            ['label' => 'Total Students', 'value' => $stats['total_students'], 'accent' => 'primary'],
            ['label' => 'Active Students', 'value' => $stats['active_students'], 'accent' => 'success'],
            ['label' => 'Pending Fees', 'value' => $stats['pending_fees'], 'accent' => 'warning'],
        ];
    @endphp
    @foreach ($cards as $card)
        <div class="bg-white rounded-xl border border-secondary-200 p-5">
            <p class="text-xs font-medium text-secondary-500 uppercase tracking-wide">{{ $card['label'] }}</p>
            <p class="mt-2 text-2xl font-bold text-{{ $card['accent'] }}-600">{{ $card['value'] }}</p>
        </div>
    @endforeach
</div>

<div class="bg-white rounded-xl border border-secondary-200">
    <div class="px-5 py-4 border-b border-secondary-200 flex items-center justify-between">
        <h2 class="font-semibold text-secondary-900">Recent Applications</h2>
        <a href="{{ route('admin.applications.index') }}" class="text-sm text-primary-600 hover:underline">View all &rarr;</a>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-5 py-3 font-medium">Application #</th>
                    <th class="px-5 py-3 font-medium">Name</th>
                    <th class="px-5 py-3 font-medium">Class</th>
                    <th class="px-5 py-3 font-medium">Status</th>
                    <th class="px-5 py-3 font-medium">Submitted</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($recentApplications as $app)
                    <tr>
                        <td class="px-5 py-3 font-mono text-xs text-secondary-700">{{ $app->application_number }}</td>
                        <td class="px-5 py-3 text-secondary-900">{{ $app->full_name }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $app->class }}</td>
                        <td class="px-5 py-3"><x-badge :status="$app->status" /></td>
                        <td class="px-5 py-3 text-secondary-500">{{ $app->created_at->format('d M Y') }}</td>
                        <td class="px-5 py-3 text-right">
                            <a href="{{ route('admin.applications.show', $app) }}" class="text-primary-600 hover:underline">View</a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="px-5 py-8 text-center text-secondary-400">No applications yet.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
