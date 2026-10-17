<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * A public admission application. Submitted with no login required from
 * /apply. Once an admin approves it, a Student row is created from it
 * (see App\Services\StudentOnboardingService).
 *
 * @property string $status pending|approved|rejected
 */
class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'application_number',
        'full_name',
        'father_name',
        'mother_name',
        'dob',
        'gender',
        'email',
        'mobile',
        'address',
        'city',
        'state',
        'pincode',
        'class',
        'stream',
        'category',
        'previous_qualification',
        'previous_school',
        'photo_path',
        'status',
        'remarks',
        'reviewed_by',
        'reviewed_at',
    ];

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'reviewed_at' => 'datetime',
        ];
    }

    public function documents()
    {
        return $this->hasMany(ApplicationDocument::class);
    }

    public function student()
    {
        return $this->hasOne(Student::class);
    }

    public function reviewer()
    {
        return $this->belongsTo(Admin::class, 'reviewed_by');
    }

    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    public function scopeSearch($query, ?string $term)
    {
        if (! $term) {
            return $query;
        }

        return $query->where(function ($q) use ($term) {
            $q->where('full_name', 'like', "%{$term}%")
                ->orWhere('application_number', 'like', "%{$term}%")
                ->orWhere('mobile', 'like', "%{$term}%")
                ->orWhere('email', 'like', "%{$term}%");
        });
    }
}
