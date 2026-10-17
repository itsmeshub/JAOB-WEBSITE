@extends('layouts.student')

@section('title', 'My Results')
@section('page-title', 'My Results')

@section('student-content')
<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="px-6 py-4 border-b border-secondary-200 flex items-center justify-between">
        <h2 class="font-semibold text-secondary-900">Subject-wise Marks</h2>
        @if ($results->isNotEmpty())
            <a href="{{ route('student.marksheet.download') }}" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2">
                Download Marksheet (PDF)
            </a>
        @endif
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-6 py-3 font-medium">Subject</th>
                    <th class="px-6 py-3 font-medium">Exam</th>
                    <th class="px-6 py-3 font-medium">Marks Obtained</th>
                    <th class="px-6 py-3 font-medium">Max Marks</th>
                    <th class="px-6 py-3 font-medium">Grade</th>
                    <th class="px-6 py-3 font-medium">Result</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($results as $result)
                    <tr>
                        <td class="px-6 py-3 text-secondary-900 font-medium">{{ $result->subject }}</td>
                        <td class="px-6 py-3 text-secondary-600">{{ $result->exam?->title ?? '—' }}</td>
                        <td class="px-6 py-3 text-secondary-600">{{ $result->marks_obtained }}</td>
                        <td class="px-6 py-3 text-secondary-600">{{ $result->max_marks }}</td>
                        <td class="px-6 py-3 text-secondary-600">{{ $result->grade }}</td>
                        <td class="px-6 py-3"><x-badge :status="$result->result_status" /></td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="px-6 py-10 text-center text-secondary-400">No published results yet. Check back after your exams have been evaluated.</td></tr>
                @endforelse
            </tbody>
            @if ($results->isNotEmpty())
                <tfoot>
                    <tr class="border-t-2 border-secondary-200 font-semibold text-secondary-900">
                        <td class="px-6 py-3" colspan="2">Total</td>
                        <td class="px-6 py-3">{{ $totalObtained }}</td>
                        <td class="px-6 py-3">{{ $totalMax }}</td>
                        <td class="px-6 py-3" colspan="2">{{ $percentage }}%</td>
                    </tr>
                </tfoot>
            @endif
        </table>
    </div>
</div>
@endsection
