@extends('layouts.admin')

@section('title', 'Fees')
@section('page-title', 'Fees')

@section('admin-content')
<div class="flex justify-end mb-5">
    <a href="{{ route('admin.fees.create') }}" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2.5">
        + Record Fee Entry
    </a>
</div>

<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-5 py-3 font-medium">Student</th>
                    <th class="px-5 py-3 font-medium">Fee Type</th>
                    <th class="px-5 py-3 font-medium">Amount</th>
                    <th class="px-5 py-3 font-medium">Status</th>
                    <th class="px-5 py-3 font-medium">Transaction ID</th>
                    <th class="px-5 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($fees as $fee)
                    <tr class="hover:bg-secondary-50">
                        <td class="px-5 py-3 text-secondary-900 font-medium">
                            {{ $fee->student->full_name }}
                            <span class="block text-xs text-secondary-400 font-mono">{{ $fee->student->student_number }}</span>
                        </td>
                        <td class="px-5 py-3 text-secondary-600">{{ $fee->fee_type }}</td>
                        <td class="px-5 py-3 text-secondary-600">₹{{ number_format($fee->amount, 2) }}</td>
                        <td class="px-5 py-3"><x-badge :status="$fee->status" /></td>
                        <td class="px-5 py-3 text-secondary-500 font-mono text-xs">{{ $fee->transaction_id ?? '—' }}</td>
                        <td class="px-5 py-3 text-right">
                            @if ($fee->status !== 'paid')
                                <button type="button"
                                        onclick="document.getElementById('mark-paid-{{ $fee->id }}').classList.toggle('hidden')"
                                        class="text-primary-600 hover:underline">Mark Paid</button>
                            @else
                                <a href="{{ route('admin.students.fee-receipt', [$fee->student, $fee]) }}" class="text-primary-600 hover:underline">Receipt</a>
                            @endif
                        </td>
                    </tr>
                    @if ($fee->status !== 'paid')
                        <tr id="mark-paid-{{ $fee->id }}" class="hidden bg-secondary-50">
                            <td colspan="6" class="px-5 py-4">
                                <form method="POST" action="{{ route('admin.fees.mark-paid', $fee) }}" class="flex flex-wrap gap-3 items-end">
                                    @csrf
                                    <div class="min-w-[180px]">
                                        <label class="block text-xs font-medium text-secondary-500 mb-1">Payment Method</label>
                                        <input type="text" name="payment_method" required placeholder="Cash / UPI / Bank Transfer"
                                               class="rounded-lg border border-secondary-300 px-3 py-2 text-sm w-full">
                                    </div>
                                    <div class="min-w-[180px]">
                                        <label class="block text-xs font-medium text-secondary-500 mb-1">Transaction ID</label>
                                        <input type="text" name="transaction_id" required
                                               class="rounded-lg border border-secondary-300 px-3 py-2 text-sm w-full">
                                    </div>
                                    <button type="submit" class="rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2">
                                        Confirm Paid
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endif
                @empty
                    <tr><td colspan="6" class="px-5 py-10 text-center text-secondary-400">No fee entries yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="px-5 py-4 border-t border-secondary-100">
        {{ $fees->links() }}
    </div>
</div>
@endsection
