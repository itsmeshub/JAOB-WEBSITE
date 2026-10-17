<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $status scheduled|completed|cancelled
 */
class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'class',
        'subject',
        'exam_date',
        'start_time',
        'end_time',
        'venue',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'exam_date' => 'date',
        ];
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }
}
