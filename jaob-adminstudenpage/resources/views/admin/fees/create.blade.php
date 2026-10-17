@extends('layouts.admin')

@section('title', 'Record Fee Entry')
@section('page-title', 'Record Fee Entry')

@section('admin-content')
<div class="max-w-2xl bg-white rounded-xl border border-secondary-200 p-6">
    <form method="POST" action="{{ route('admin.fees.store') }}">
        @csrf
        <div class="grid sm:grid-cols-2 gap-4">
            <x-select name="student_id" label="Student" required :value="$preselectedStudentId ?? ''"
                      :options="$students->mapWithKeys(fn($s) => [$s->id => $s->full_name.' ('.$s->student_number.')'])" />
            <x-input name="fee_type" label="Fee Type" required placeholder="Admission Fee / Exam Fee / Tuition Fee" />
            <x-input name="amount" label="Amount (₹)" type="number" step="0.01" min="0" required />
            <x-select name="status" label="Status" required :value="'pending'"
                      :options="['pending' => 'Pending', 'paid' => 'Paid', 'failed' => 'Failed']" />
            <x-input name="payment_method" label="Payment Method (if already paid)" placeholder="Cash / UPI / Bank Transfer" />
            <x-input name="transaction_id" label="Transaction ID (if already paid)" />
        </div>
        <div class="mt-6 flex gap-3">
            <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5">
                Save Fee Entry
            </button>
            <a href="{{ route('admin.fees.index') }}" class="rounded-lg border border-secondary-300 text-sm font-medium px-5 py-2.5 text-secondary-700 hover:bg-secondary-50">
                Cancel
            </a>
        </div>
    </form>
</div>
@endsection
