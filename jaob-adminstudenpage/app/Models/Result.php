<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * A single subject-wise mark entry for a student, optionally tied to an
 * Exam. Only visible to the student once `published` is true.
 *
 * @property string $result_status pass|fail
 * @property bool $published
 */
class Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'exam_id',
        'subject',
        'marks_obtained',
        'max_marks',
        'grade',
        'result_status',
        'published',
    ];

    protected function casts(): array
    {
        return [
            'marks_obtained' => 'decimal:2',
            'max_marks' => 'decimal:2',
            'published' => 'boolean',
        ];
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    public function percentage(): float
    {
        if ((float) $this->max_marks <= 0) {
            return 0.0;
        }

        return round(((float) $this->marks_obtained / (float) $this->max_marks) * 100, 2);
    }

    /**
     * Simple default grade calculator, used as a fallback when the admin
     * doesn't type a grade in manually.
     */
    public static function gradeFor(float $percentage): string
    {
        return match (true) {
            $percentage >= 90 => 'A+',
            $percentage >= 80 => 'A',
            $percentage >= 70 => 'B+',
            $percentage >= 60 => 'B',
            $percentage >= 50 => 'C',
            $percentage >= 33 => 'D',
            default => 'F',
        };
    }
}
