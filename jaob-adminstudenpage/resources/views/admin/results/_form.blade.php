@php $result = $result ?? null; @endphp

<div class="grid sm:grid-cols-2 gap-4">
    <x-select name="student_id" label="Student" required
              :value="$result->student_id ?? ($preselectedStudentId ?? '')"
              :options="$students->mapWithKeys(fn($s) => [$s->id => $s->full_name.' ('.$s->student_number.')'])" />
    <x-select name="exam_id" label="Exam (optional)" :value="$result->exam_id ?? ''"
              :options="$exams->mapWithKeys(fn($e) => [$e->id => $e->title.' — '.$e->subject])" />
    <x-input name="subject" label="Subject" :value="$result->subject ?? ''" required />
    <x-select name="result_status" label="Result" :value="$result->result_status ?? 'pass'" required
              :options="['pass' => 'Pass', 'fail' => 'Fail']" />
    <x-input name="marks_obtained" label="Marks Obtained" type="number" step="0.01" min="0" :value="$result->marks_obtained ?? ''" required />
    <x-input name="max_marks" label="Max Marks" type="number" step="0.01" min="1" :value="$result->max_marks ?? ''" required />
    <x-input name="grade" label="Grade (auto if left blank)" :value="$result->grade ?? ''" />
</div>

<label class="mt-4 flex items-center gap-2 text-sm text-secondary-700">
    <input type="checkbox" name="published" value="1" @checked($result->published ?? false)
           class="rounded border-secondary-300 text-primary-600 focus:ring-primary-500">
    Publish immediately (visible to the student right away)
</label>

<div class="mt-6 flex gap-3">
    <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5">
        {{ $result ? 'Save Changes' : 'Save Result' }}
    </button>
    <a href="{{ route('admin.results.index') }}" class="rounded-lg border border-secondary-300 text-sm font-medium px-5 py-2.5 text-secondary-700 hover:bg-secondary-50">
        Cancel
    </a>
</div>
