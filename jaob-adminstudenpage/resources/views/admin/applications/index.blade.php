@extends('layouts.admin')

@section('title', 'Applications')
@section('page-title', 'Applications')

@section('admin-content')
<div class="bg-white rounded-xl border border-secondary-200 mb-5 p-4">
    <form method="GET" class="flex flex-wrap gap-3 items-end">
        <div class="flex-1 min-w-[200px]">
            <label class="block text-xs font-medium text-secondary-500 mb-1">Search</label>
            <input type="text" name="q" value="{{ $filters['q'] ?? '' }}" placeholder="Name, application #, mobile..."
                   class="w-full rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
        </div>
        <div>
            <label class="block text-xs font-medium text-secondary-500 mb-1">Class</label>
            <select name="class" class="rounded-lg border border-secondary-300 px-3 py-2 text-sm">
                <option value="">All</option>
                <option value="10th" @selected(($filters['class'] ?? '') === '10th')>10th</option>
                <option value="12th" @selected(($filters['class'] ?? '') === '12th')>12th</option>
            </select>
        </div>
        <div>
            <label class="block text-xs font-medium text-secondary-500 mb-1">Status</label>
            <select name="status" class="rounded-lg border border-secondary-300 px-3 py-2 text-sm">
                <option value="">All</option>
                <option value="pending" @selected(($filters['status'] ?? '') === 'pending')>Pending</option>
                <option value="approved" @selected(($filters['status'] ?? '') === 'approved')>Approved</option>
                <option value="rejected" @selected(($filters['status'] ?? '') === 'rejected')>Rejected</option>
            </select>
        </div>
        <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2">
            Filter
        </button>
        @if (($filters['q'] ?? '') || ($filters['class'] ?? '') || ($filters['status'] ?? ''))
            <a href="{{ route('admin.applications.index') }}" class="text-sm text-secondary-500 hover:underline px-2 py-2">Clear</a>
        @endif
    </form>
</div>

<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-5 py-3 font-medium">Application #</th>
                    <th class="px-5 py-3 font-medium">Name</th>
                    <th class="px-5 py-3 font-medium">Class / Stream</th>
                    <th class="px-5 py-3 font-medium">Mobile</th>
                    <th class="px-5 py-3 font-medium">Status</th>
                    <th class="px-5 py-3 font-medium">Submitted</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($applications as $app)
                    <tr class="hover:bg-secondary-50">
                        <td class="px-5 py-3 font-mono text-xs text-secondary-700">{{ $app->application_number }}</td>
                        <td class="px-5 py-3 text-secondary-900 font-medium">{{ $app->full_name }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $app->class }}@if($app->stream) / {{ ucfirst($app->stream) }}@endif</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $app->mobile }}</td>
                        <td class="px-5 py-3"><x-badge :status="$app->status" /></td>
                        <td class="px-5 py-3 text-secondary-500">{{ $app->created_at->format('d M Y') }}</td>
                        <td class="px-5 py-3 text-right">
                            <a href="{{ route('admin.applications.show', $app) }}" class="text-primary-600 hover:underline font-medium">Review</a>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="7" class="px-5 py-10 text-center text-secondary-400">No applications found.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="px-5 py-4 border-t border-secondary-100">
        {{ $applications->links() }}
    </div>
</div>
@endsection
