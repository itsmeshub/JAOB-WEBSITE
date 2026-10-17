<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        @page { margin: 30px 40px; }
        body { font-family: DejaVu Sans, sans-serif; color: #0f172a; font-size: 12px; }
        .header-table { width: 100%; border-bottom: 3px solid #059669; padding-bottom: 12px; margin-bottom: 20px; }
        .header-table td { vertical-align: middle; }
        .institute-name { font-size: 20px; font-weight: bold; color: #065f46; }
        .institute-address { font-size: 10px; color: #64748b; }
        .doc-title { text-align: right; font-size: 16px; font-weight: bold; color: #0f172a; text-transform: uppercase; letter-spacing: 1px; }

        .info-table { width: 100%; margin-bottom: 20px; border-collapse: collapse; }
        .info-table td { padding: 4px 8px; font-size: 11px; }
        .info-label { color: #64748b; width: 130px; }
        .info-value { font-weight: bold; color: #0f172a; }

        .marks-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        .marks-table th { background: #f0fdf4; color: #065f46; text-align: left; padding: 8px 10px; font-size: 11px; border: 1px solid #d1fae6; }
        .marks-table td { padding: 8px 10px; font-size: 11px; border: 1px solid #e2e8f0; }
        .marks-table tfoot td { font-weight: bold; background: #f8fafc; }

        .result-box { margin-top: 20px; padding: 14px; border: 2px solid #059669; border-radius: 6px; text-align: center; }
        .result-box .pct { font-size: 22px; font-weight: bold; color: #059669; }

        .footer { margin-top: 60px; }
        .footer-table { width: 100%; }
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
            <td class="doc-title">Marksheet</td>
        </tr>
    </table>

    <table class="info-table">
        <tr>
            <td class="info-label">Student Name</td>
            <td class="info-value">{{ $student->full_name }}</td>
            <td class="info-label">Student ID</td>
            <td class="info-value">{{ $student->student_number }}</td>
        </tr>
        <tr>
            <td class="info-label">Father's Name</td>
            <td class="info-value">{{ $student->father_name ?? '—' }}</td>
            <td class="info-label">Class</td>
            <td class="info-value">{{ $student->class }}@if($student->stream) / {{ ucfirst($student->stream) }}@endif</td>
        </tr>
        <tr>
            <td class="info-label">Mother's Name</td>
            <td class="info-value">{{ $student->mother_name ?? '—' }}</td>
            <td class="info-label">Date of Birth</td>
            <td class="info-value">{{ $student->dob?->format('d M Y') ?? '—' }}</td>
        </tr>
    </table>

    <table class="marks-table">
        <thead>
            <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Max Marks</th>
                <th>Grade</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($results as $result)
                <tr>
                    <td>{{ $result->subject }}</td>
                    <td>{{ $result->marks_obtained }}</td>
                    <td>{{ $result->max_marks }}</td>
                    <td>{{ $result->grade }}</td>
                    <td style="text-transform: capitalize;">{{ $result->result_status }}</td>
                </tr>
            @empty
                <tr><td colspan="5" style="text-align:center; color:#94a3b8;">No published results available.</td></tr>
            @endforelse
        </tbody>
        @if ($results->isNotEmpty())
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{{ $totalObtained }}</td>
                    <td>{{ $totalMax }}</td>
                    <td colspan="2"></td>
                </tr>
            </tfoot>
        @endif
    </table>

    @if ($results->isNotEmpty())
        <div class="result-box">
            <div style="font-size:11px; color:#64748b;">Overall Percentage</div>
            <div class="pct">{{ $percentage }}%</div>
        </div>
    @endif

    <div class="footer">
        <table class="footer-table">
            <tr>
                <td style="width:50%;">
                    <div class="signature-line">Date of Issue: {{ now()->format('d M Y') }}</div>
                </td>
                <td style="width:50%;">
                    <div class="signature-line">Controller of Examinations</div>
                </td>
            </tr>
        </table>
    </div>

    <div class="disclaimer">
        This is a computer-generated document issued by {{ $institute['short_name'] }} and does not require a physical signature to be valid.
    </div>

</body>
</html>
