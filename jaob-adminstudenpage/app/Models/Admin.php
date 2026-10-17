<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * The admin/staff account model, authenticated via the `admin` guard only.
 *
 * @property int $id
 * @property string $full_name
 * @property string $email
 * @property string $password
 * @property string $role
 * @property string|null $phone
 */
class Admin extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'admins';

    protected $fillable = [
        'full_name',
        'email',
        'password',
        'role',
        'phone',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isSuperAdmin(): bool
    {
        return $this->role === 'super_admin';
    }

    public function reviewedApplications()
    {
        return $this->hasMany(Application::class, 'reviewed_by');
    }
}
