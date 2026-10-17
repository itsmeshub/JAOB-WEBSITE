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

        .card { border: 2px solid #059669; border-radius: 8px; padding: 18px; }
        .info-table { width: 100%; border-collapse: collapse; }
        .info-table td { padding: 6px 8px; font-size: 11px; vertical-align: top; }
        .info-label { color: #64748b; width: 150px; }
        .info-value { font-weight: bold; color: #0f172a; }

        .exam-box { margin-top: 16px; background: #f0fdf4; border: 1px solid #d1fae6; border-radius: 6px; padding: 14px; }
        .exam-title { font-size: 15px; font-weight: bold; color: #065f46; margin-bottom: 6px; }

        .instructions { margin-top: 24px; font-size: 10px; color: #475569; }
        .instructions li { margin-bottom: 4px; }

        .footer-table { width: 100%; margin-top: 50px; }
        .signature-line { border-top: 1px solid #94a3b8; margin-top: 40px; padding-top: 4px; font-size: 10px; color: #64748b; text-align: center; }
    </style>
</head>
<body>

    <table class="header-table">
        <tr>
            <td>
                <div class="institute-name">{{ $institute['short_name'] }}</div>
                <div class="institute-address">{{ $institute['full_name'] }}<br>{{ $institute['address'] }}</div>
            </td>
            <td class="doc-title">Admit Card</td>
        </tr>
    </table>

    <div class="card">
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
                <td class="info-label">Date of Birth</td>
                <td class="info-value">{{ $student->dob?->format('d M Y') ?? '—' }}</td>
                <td class="info-label">Gender</td>
                <td class="info-value" style="text-transform:capitalize;">{{ $student->gender ?? '—' }}</td>
            </tr>
        </table>

        <div class="exam-box">
            <div class="exam-title">{{ $exam->title }}</div>
            <table class="info-table">
                <tr>
                    <td class="info-label">Subject</td>
                    <td class="info-value">{{ $exam->subject }}</td>
                    <td class="info-label">Exam Date</td>
                    <td class="info-value">{{ $exam->exam_date->format('d M Y') }}</td>
                </tr>
                <tr>
                    <td class="info-label">Reporting / Start Time</td>
                    <td class="info-value">{{ \Carbon\Carbon::parse($exam->start_time)->format('h:i A') }}</td>
                    <td class="info-label">End Time</td>
                    <td class="info-value">{{ \Carbon\Carbon::parse($exam->end_time)->format('h:i A') }}</td>
                </tr>
                <tr>
                    <td class="info-label">Venue</td>
                    <td class="info-value" colspan="3">{{ $exam->venue }}</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="instructions">
        <strong>Instructions:</strong>
        <ul>
            <li>Carry this admit card and a valid photo ID to the examination venue.</li>
            <li>Arrive at least 30 minutes before the reporting time.</li>
            <li>Electronic devices are not permitted inside the examination hall.</li>
        </ul>
    </div>

    <table class="footer-table">
        <tr>
            <td style="width:50%;"><div class="signature-line">Student's Signature</div></td>
            <td style="width:50%;"><div class="signature-line">Controller of Examinations</div></td>
        </tr>
    </table>

</body>
</html>
