@extends('layouts.admin')

@section('title', 'Results')
@section('page-title', 'Results')

@section('admin-content')
<div class="flex justify-end mb-5">
    <a href="{{ route('admin.results.create') }}" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2.5">
        + Enter Result
    </a>
</div>

<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-5 py-3 font-medium">Student</th>
                    <th class="px-5 py-3 font-medium">Subject</th>
                    <th class="px-5 py-3 font-medium">Exam</th>
                    <th class="px-5 py-3 font-medium">Marks</th>
                    <th class="px-5 py-3 font-medium">Grade</th>
                    <th class="px-5 py-3 font-medium">Result</th>
                    <th class="px-5 py-3 font-medium">Published</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($results as $result)
                    <tr class="hover:bg-secondary-50">
                        <td class="px-5 py-3 text-secondary-900 font-medium">
                            {{ $result->student->full_name }}
                            <span class="block text-xs text-secondary-400 font-mono">{{ $result->student->student_number }}</span>
                        </td>
                        <td class="px-5 py-3 text-secondary-600">{{ $result->subject }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $result->exam?->title ?? '—' }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $result->marks_obtained }}/{{ $result->max_marks }}</td>
                        <td class="px-5 py-3 text-secondary-600">{{ $result->grade }}</td>
                        <td class="px-5 py-3"><x-badge :status="$result->result_status" /></td>
                        <td class="px-5 py-3">
                            <form method="POST" action="{{ route('admin.results.toggle-publish', $result) }}">
                                @csrf
                                <button type="submit"
                                        class="text-xs px-2.5 py-1 rounded-full border {{ $result->published ? 'bg-success-50 text-success-700 border-success-200' : 'bg-secondary-100 text-secondary-600 border-secondary-200' }}">
                                    {{ $result->published ? 'Published' : 'Draft — click to publish' }}
                                </button>
                            </form>
                        </td>
                        <td class="px-5 py-3 text-right space-x-3">
                            <a href="{{ route('admin.results.edit', $result) }}" class="text-primary-600 hover:underline">Edit</a>
                            <form method="POST" action="{{ route('admin.results.destroy', $result) }}" class="inline"
                                  onsubmit="return confirm('Delete this result?');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-error-600 hover:underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="8" class="px-5 py-10 text-center text-secondary-400">No results entered yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="px-5 py-4 border-t border-secondary-100">
        {{ $results->links() }}
    </div>
</div>
@endsection
