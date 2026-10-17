<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        @page { margin: 30px 40px; }
        body { font-family: DejaVu Sans, sans-serif; color: #0f172a; font-size: 12px; }
        .header-table { width: 100%; border-bottom: 3px solid #059669; padding-bottom: 12px; margin-bottom: 20px; }
        .institute-name { font-size: 20px; font-weight: bold; color: #065f46; }
        .institute-address { font-size: 10px; color: #64748b; }
        .doc-title { text-align: right; font-size: 16px; font-weight: bold; color: #0f172a; text-transform: uppercase; letter-spacing: 1px; }

        .receipt-no { text-align: right; font-size: 10px; color: #64748b; margin-bottom: 16px; }

        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .info-table td { padding: 5px 8px; font-size: 11px; }
        .info-label { color: #64748b; width: 140px; }
        .info-value { font-weight: bold; color: #0f172a; }

        .amount-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .amount-table th { background: #f0fdf4; color: #065f46; text-align: left; padding: 10px; font-size: 11px; border: 1px solid #d1fae6; }
        .amount-table td { padding: 10px; font-size: 12px; border: 1px solid #e2e8f0; }
        .amount-total { font-size: 16px; font-weight: bold; color: #059669; text-align: right; }

        .paid-stamp { display: inline-block; border: 2px solid #16a34a; color: #16a34a; padding: 6px 18px; font-weight: bold; border-radius: 4px; font-size: 13px; letter-spacing: 1px; }

        .footer-table { width: 100%; margin-top: 60px; }
        .signature-line { border-top: 1px solid #94a3b8; margin-top: 40px; padding-top: 4px; font-size: 10px; color: #64748b; text-align: center; }
        .disclaimer { margin-top: 30px; font-size: 9px; color: #94a3b8; text-align: center; }
    </style>
</head>
<body>

    <table class="header-table">
        <tr>
            <td>
                <div class="institute-name">{{ $institute['short_name'] }}</div>
                <div class="institute-address">{{ $institute['full_name'] }}<br>{{ $institute['address'] }}</div>
            </td>
            <td class="doc-title">Fee Receipt</td>
        </tr>
    </table>

    <div class="receipt-no">Receipt #: FR-{{ str_pad($fee->id, 6, '0', STR_PAD_LEFT) }} &nbsp;|&nbsp; Date: {{ $fee->paid_at?->format('d M Y') ?? now()->format('d M Y') }}</div>

    <table class="info-table">
        <tr>
            <td class="info-label">Student Name</td>
            <td class="info-value">{{ $student->full_name }}</td>
            <td class="info-label">Student ID</td>
            <td class="info-value">{{ $student->student_number }}</td>
        </tr>
        <tr>
            <td class="info-label">Class</td>
            <td class="info-value">{{ $student->class }}@if($student->stream) / {{ ucfirst($student->stream) }}@endif</td>
            <td class="info-label">Payment Method</td>
            <td class="info-value">{{ $fee->payment_method ?? '—' }}</td>
        </tr>
        <tr>
            <td class="info-label">Transaction ID</td>
            <td class="info-value" colspan="3">{{ $fee->transaction_id ?? '—' }}</td>
        </tr>
    </table>

    <table class="amount-table">
        <thead>
            <tr>
                <th>Fee Type</th>
                <th style="text-align:right;">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $fee->fee_type }}</td>
                <td style="text-align:right;">₹{{ number_format($fee->amount, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <div class="amount-total">Total Paid: ₹{{ number_format($fee->amount, 2) }}</div>

    <div style="margin-top: 24px;">
        <span class="paid-stamp">PAID</span>
    </div>

    <table class="footer-table">
        <tr>
            <td style="width:50%;"><div class="signature-line">Date of Issue: {{ now()->format('d M Y') }}</div></td>
            <td style="width:50%;"><div class="signature-line">Accounts Office</div></td>
        </tr>
    </table>

    <div class="disclaimer">
        This is a computer-generated receipt issued by {{ $institute['short_name'] }} and does not require a physical signature to be valid.
    </div>

</body>
</html>
