@extends('layouts.admin')

@section('title', 'Exams')
@section('page-title', 'Exams')

@section('admin-content')
<div class="flex justify-end mb-5">
    <a href="{{ route('admin.exams.create') }}" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2.5">
        + Schedule Exam
    </a>
</div>

<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-5 py-3 font-medium">Title</th>
                    <th class="px-5 py-3 font-medium">Class</th>
                    <th class="px-5 py-3 font-medium">Subject</th>
                    <th class="px-5 py-3 font-medium">Date</th>
                    <th class="px-5 py-3 font-medium">Time</th>
                    <th class="px-5 py-3 font-medium">Venue</th>
                    <th class="px-5 py-3 font-medium">Status</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($exams as $exam)
                    <tr class="hover:bg-secondary-50">
                        <td class="px-5 py-3 text-secondary-900 font-medium">{{ $exam->title }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $exam->class }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $exam->subject }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $exam->exam_date->format('d M Y') }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ \Carbon\Carbon::parse($exam->start_time)->format('h:i A') }} - {{ \Carbon\Carbon::parse($exam->end_time)->format('h:i A') }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $exam->venue }}</td>
                        <td class="px-5 py-3"><x-badge :status="$exam->status" /></td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.exams.edit', $exam) }}" class="text-primary-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.exams.destroy', $exam) }}" class="inline"
                                  onsubmit="return confirm('Delete this exam?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-error-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="8" class="px-5 py-10 text-center text-secondary-400">No exams scheduled yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="px-5 py-4 border-t border-secondary-100">
        {{ $exams->links() }}
    </div>
</div>
@endsection
