@extends('layouts.student')

@section('title', 'Fees')
@section('page-title', 'My Fees')

@section('student-content')
<div class="bg-white rounded-xl border border-secondary-200 overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="text-left text-secondary-500 border-b border-secondary-100">
                    <th class="px-6 py-3 font-medium">Fee Type</th>
                    <th class="px-6 py-3 font-medium">Amount</th>
                    <th class="px-6 py-3 font-medium">Status</th>
                    <th class="px-6 py-3 font-medium">Paid On</th>
                    <th class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-secondary-100">
                @forelse ($fees as $fee)
                    <tr>
                        <td class="px-6 py-3 text-secondary-900 font-medium">{{ $fee->fee_type }}</td>
                        <td class="px-6 py-3 text-secondary-600">₹{{ number_format($fee->amount, 2) }}</td>
                        <td class="px-6 py-3"><x-badge :status="$fee->status" /></td>
                        <td class="px-6 py-3 text-secondary-500">{{ $fee->paid_at?->format('d M Y') ?? '—' }}</td>
                        <td class="px-6 py-3 text-right">
                            @if ($fee->isPaid())
                                <a href="{{ route('student.fees.receipt', $fee) }}" class="text-primary-600 hover:underline text-sm font-medium">
                                    Download Receipt
                                </a>
                            @endif
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-6 py-10 text-center text-secondary-400">No fee records yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
