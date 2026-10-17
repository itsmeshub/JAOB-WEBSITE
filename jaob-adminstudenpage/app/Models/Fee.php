<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $status pending|paid|failed
 */
class Fee extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'application_id',
        'fee_type',
        'amount',
        'status',
        'payment_method',
        'transaction_id',
        'paid_at',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'paid_at' => 'datetime',
        ];
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function application()
    {
        return $this->belongsTo(Application::class);
    }

    public function isPaid(): bool
    {
        return $this->status === 'paid';
    }
}
