<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Student;
use Illuminate\Support\Str;

/**
 * Generates the human-facing sequential-looking identifiers used across the
 * dashboard (application numbers, student numbers) plus one-time random
 * passwords. Kept as a single small service so the format can be changed in
 * one place if the client wants a different numbering scheme later.
 */
class NumberGenerator
{
    /**
     * e.g. JAOB2026000123
     */
    public function applicationNumber(): string
    {
        $year = now()->format('Y');
        $prefix = "JAOB{$year}";

        return $this->nextSequential(
            prefix: $prefix,
            currentMax: Application::query()
                ->where('application_number', 'like', "{$prefix}%")
                ->max('application_number'),
            digits: 6,
        );
    }

    /**
     * e.g. JAOB-STU-2026-00042
     */
    public function studentNumber(): string
    {
        $year = now()->format('Y');
        $prefix = "JAOB-STU-{$year}-";

        return $this->nextSequential(
            prefix: $prefix,
            currentMax: Student::query()
                ->where('student_number', 'like', "{$prefix}%")
                ->max('student_number'),
            digits: 5,
        );
    }

    /**
     * A random, human-typeable one-time password (avoids ambiguous
     * characters like 0/O and 1/l/I).
     */
    public function randomPassword(int $length = 10): string
    {
        $alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        $max = strlen($alphabet) - 1;

        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $password .= $alphabet[random_int(0, $max)];
        }

        return $password;
    }

    private function nextSequential(string $prefix, ?string $currentMax, int $digits): string
    {
        $next = 1;

        if ($currentMax) {
            $numericPart = (int) substr($currentMax, strlen($prefix));
            $next = $numericPart + 1;
        }

        return $prefix.str_pad((string) $next, $digits, '0', STR_PAD_LEFT);
    }
}
