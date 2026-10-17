@php $exam = $exam ?? null; @endphp

<div class="grid sm:grid-cols-2 gap-4">
    <x-input name="title" label="Exam Title" :value="$exam->title ?? ''" required placeholder="Half-Yearly Examination" />
    <x-select name="class" label="Class" :value="$exam->class ?? ''" required
              :options="['10th' => '10th', '12th' => '12th']" />
    <x-input name="subject" label="Subject" :value="$exam->subject ?? ''" required />
    <x-input name="venue" label="Venue" :value="$exam->venue ?? ''" required />
    <x-input name="exam_date" label="Exam Date" type="date" :value="$exam->exam_date?->format('Y-m-d') ?? ''" required />
    <x-select name="status" label="Status" :value="$exam->status ?? 'scheduled'" required
              :options="['scheduled' => 'Scheduled', 'completed' => 'Completed', 'cancelled' => 'Cancelled']" />
    <x-input name="start_time" label="Start Time" type="time" :value="$exam->start_time ?? ''" required />
    <x-input name="end_time" label="End Time" type="time" :value="$exam->end_time ?? ''" required />
</div>

<div class="mt-6 flex gap-3">
    <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5">
        {{ $exam ? 'Save Changes' : 'Schedule Exam' }}
    </button>
    <a href="{{ route('admin.exams.index') }}" class="rounded-lg border border-secondary-300 text-sm font-medium px-5 py-2.5 text-secondary-700 hover:bg-secondary-50">
        Cancel
    </a>
</div>
