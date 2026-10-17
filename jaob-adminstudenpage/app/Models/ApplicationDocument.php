<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * A single uploaded document (marksheet copy, ID proof, etc.) attached to
 * an Application.
 *
 * @property string $doc_type
 * @property string $file_path storage path on the `public` disk
 */
class ApplicationDocument extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'application_id',
        'doc_type',
        'file_path',
        'file_name',
        'uploaded_at',
    ];

    protected function casts(): array
    {
        return [
            'uploaded_at' => 'datetime',
        ];
    }

    public function application()
    {
        return $this->belongsTo(Application::class);
    }
}
