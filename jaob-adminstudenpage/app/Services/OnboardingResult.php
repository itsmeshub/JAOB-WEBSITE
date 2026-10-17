<?php

namespace App\Services;

use App\Models\Student;

/**
 * Simple value object carrying a freshly created Student plus the
 * one-time-visible plain-text password generated for them.
 */
final class OnboardingResult
{
    public function __construct(
        public readonly Student $student,
        public readonly string $plainPassword,
    ) {}
}
