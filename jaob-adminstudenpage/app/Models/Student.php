<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * The student account model, authenticated via the `student` guard only.
 * Students are never self-registered — a row here is only ever created by
 * App\Services\StudentOnboardingService when an admin approves an
 * Application.
 *
 * @property int $id
 * @property string $student_number
 * @property int|null $application_id
 * @property string $full_name
 * @property string $email
 * @property string $password
 * @property string $status active|inactive
 */
class Student extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'students';

    protected $fillable = [
        'student_number',
        'application_id',
        'full_name',
        'father_name',
        'mother_name',
        'dob',
        'gender',
        'email',
        'mobile',
        'address',
        'class',
        'stream',
        'category',
        'photo_path',
        'password',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'password' => 'hashed',
        ];
    }

    public function isActive(): bool
    {
        return $this->status === 'active';
    }

    public function application()
    {
        return $this->belongsTo(Application::class);
    }

    public function results()
    {
        return $this->hasMany(Result::class);
    }

    public function publishedResults()
    {
        return $this->hasMany(Result::class)->where('published', true);
    }

    public function fees()
    {
        return $this->hasMany(Fee::class);
    }

    /**
     * Exams relevant to this student, used for admit card generation.
     */
    public function exams()
    {
        return Exam::query()
            ->where('class', $this->class)
            ->where('status', 'scheduled')
            ->orderBy('exam_date');
    }
}
