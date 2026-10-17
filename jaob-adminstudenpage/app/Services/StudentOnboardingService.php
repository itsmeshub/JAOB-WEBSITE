<?php

namespace App\Services;

use App\Models\Application;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

/**
 * Handles the single most important workflow in this app: turning an
 * approved Application into a Student account with freshly generated
 * login credentials.
 *
 * The plain-text password only ever exists in memory, inside the
 * OnboardingResult returned here, for exactly long enough to render it
 * once on the admin's screen (see admin/applications/show.blade.php).
 * It is never logged and never stored anywhere — the `students.password`
 * column only ever holds the bcrypt hash (via the Student model's
 * `password => 'hashed'` cast).
 */
class StudentOnboardingService
{
    public function __construct(
        private readonly NumberGenerator $numbers,
    ) {}

    public function approve(Application $application, int $reviewedByAdminId): OnboardingResult
    {
        return DB::transaction(function () use ($application, $reviewedByAdminId) {
            $plainPassword = $this->numbers->randomPassword();

            $student = Student::create([
                'student_number' => $this->numbers->studentNumber(),
                'application_id' => $application->id,
                'full_name' => $application->full_name,
                'father_name' => $application->father_name,
                'mother_name' => $application->mother_name,
                'dob' => $application->dob,
                'gender' => $application->gender,
                'email' => $application->email,
                'mobile' => $application->mobile,
                'address' => $application->address,
                'class' => $application->class,
                'stream' => $application->stream,
                'category' => $application->category,
                'photo_path' => $application->photo_path,
                'password' => $plainPassword, // hashed automatically by the model cast
                'status' => 'active',
            ]);

            $application->update([
                'status' => 'approved',
                'reviewed_by' => $reviewedByAdminId,
                'reviewed_at' => now(),
            ]);

            return new OnboardingResult($student, $plainPassword);
        });
    }

    public function reject(Application $application, int $reviewedByAdminId, ?string $remarks): void
    {
        $application->update([
            'status' => 'rejected',
            'remarks' => $remarks,
            'reviewed_by' => $reviewedByAdminId,
            'reviewed_at' => now(),
        ]);
    }

    /**
     * Admin-triggered reset for a student who lost their password.
     * Same rule applies: the plain password is only ever in the return
     * value, shown once, never persisted or logged.
     */
    public function resetPassword(Student $student): string
    {
        $plainPassword = $this->numbers->randomPassword();

        $student->update(['password' => $plainPassword]);

        return $plainPassword;
    }
}
