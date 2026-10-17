<?php

use App\Http\Controllers\Admin\ApplicationController as AdminApplicationController;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\ExamController as AdminExamController;
use App\Http\Controllers\Admin\FeeController as AdminFeeController;
use App\Http\Controllers\Admin\PdfController as AdminPdfController;
use App\Http\Controllers\Admin\ResultController as AdminResultController;
use App\Http\Controllers\Admin\StudentController as AdminStudentController;
use App\Http\Controllers\Public\ApplicationController as PublicApplicationController;
use App\Http\Controllers\Student\AuthController as StudentAuthController;
use App\Http\Controllers\Student\DashboardController as StudentDashboardController;
use App\Http\Controllers\Student\DocumentController as StudentDocumentController;
use App\Http\Controllers\Student\FeeController as StudentFeeController;
use App\Http\Controllers\Student\ProfileController as StudentProfileController;
use App\Http\Controllers\Student\ResultController as StudentResultController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public routes — no login required
|--------------------------------------------------------------------------
*/
Route::get('/', fn () => redirect('/apply'))->name('home');

Route::get('/apply', [PublicApplicationController::class, 'create'])->name('apply.create');
Route::post('/apply', [PublicApplicationController::class, 'store'])->name('apply.store');
Route::get('/apply/success', [PublicApplicationController::class, 'success'])->name('apply.success');

/*
|--------------------------------------------------------------------------
| Admin routes (guard: admin)
|--------------------------------------------------------------------------
| A student session can never satisfy `auth:admin` — the two guards read
| from completely separate tables and completely separate session data
| (see config/auth.php).
*/
Route::prefix('admin')->name('admin.')->group(function () {

    Route::middleware('guest:admin')->group(function () {
        Route::get('login', [AdminAuthController::class, 'create'])->name('login');
        Route::post('login', [AdminAuthController::class, 'store'])->name('login.store');
    });

    Route::middleware('auth:admin')->group(function () {
        Route::post('logout', [AdminAuthController::class, 'destroy'])->name('logout');

        Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

        Route::get('applications', [AdminApplicationController::class, 'index'])->name('applications.index');
        Route::get('applications/{application}', [AdminApplicationController::class, 'show'])->name('applications.show');
        Route::post('applications/{application}/approve', [AdminApplicationController::class, 'approve'])->name('applications.approve');
        Route::post('applications/{application}/reject', [AdminApplicationController::class, 'reject'])->name('applications.reject');

        Route::get('students', [AdminStudentController::class, 'index'])->name('students.index');
        Route::get('students/{student}', [AdminStudentController::class, 'show'])->name('students.show');
        Route::put('students/{student}', [AdminStudentController::class, 'update'])->name('students.update');
        Route::post('students/{student}/reset-password', [AdminStudentController::class, 'resetPassword'])->name('students.reset-password');
        Route::post('students/{student}/toggle-status', [AdminStudentController::class, 'toggleStatus'])->name('students.toggle-status');

        Route::get('students/{student}/marksheet', [AdminPdfController::class, 'marksheet'])->name('students.marksheet');
        Route::get('students/{student}/admit-card/{exam}', [AdminPdfController::class, 'admitCard'])->name('students.admit-card');
        Route::get('students/{student}/fee-receipt/{fee}', [AdminPdfController::class, 'feeReceipt'])->name('students.fee-receipt');

        Route::resource('exams', AdminExamController::class)->except(['show']);

        Route::get('results', [AdminResultController::class, 'index'])->name('results.index');
        Route::get('results/create', [AdminResultController::class, 'create'])->name('results.create');
        Route::post('results', [AdminResultController::class, 'store'])->name('results.store');
        Route::get('results/{result}/edit', [AdminResultController::class, 'edit'])->name('results.edit');
        Route::put('results/{result}', [AdminResultController::class, 'update'])->name('results.update');
        Route::post('results/{result}/toggle-publish', [AdminResultController::class, 'togglePublish'])->name('results.toggle-publish');
        Route::delete('results/{result}', [AdminResultController::class, 'destroy'])->name('results.destroy');

        Route::get('fees', [AdminFeeController::class, 'index'])->name('fees.index');
        Route::get('fees/create', [AdminFeeController::class, 'create'])->name('fees.create');
        Route::post('fees', [AdminFeeController::class, 'store'])->name('fees.store');
        Route::post('fees/{fee}/mark-paid', [AdminFeeController::class, 'markPaid'])->name('fees.mark-paid');
    });
});

/*
|--------------------------------------------------------------------------
| Student routes (guard: student)
|--------------------------------------------------------------------------
| No self-registration route exists anywhere in this file — a Student row
| can only be created by StudentOnboardingService when an admin approves
| an Application. Every controller action below resolves "the student" as
| Auth::guard('student')->user(), never from a route/query parameter, so a
| student can never view another student's data by editing a URL.
*/
Route::prefix('student')->name('student.')->group(function () {

    Route::middleware('guest:student')->group(function () {
        Route::get('login', [StudentAuthController::class, 'create'])->name('login');
        Route::post('login', [StudentAuthController::class, 'store'])->name('login.store');
        Route::get('forgot-password', [StudentAuthController::class, 'forgotPassword'])->name('forgot-password');
    });

    Route::middleware('auth:student')->group(function () {
        Route::post('logout', [StudentAuthController::class, 'destroy'])->name('logout');

        Route::get('dashboard', [StudentDashboardController::class, 'index'])->name('dashboard');

        Route::get('profile', [StudentProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profile', [StudentProfileController::class, 'update'])->name('profile.update');

        Route::get('results', [StudentResultController::class, 'index'])->name('results');
        Route::get('fees', [StudentFeeController::class, 'index'])->name('fees');

        Route::get('marksheet/download', [StudentDocumentController::class, 'marksheet'])->name('marksheet.download');
        Route::get('admit-card/{exam}/download', [StudentDocumentController::class, 'admitCard'])->name('admit-card.download');
        Route::get('fees/{fee}/receipt', [StudentDocumentController::class, 'feeReceipt'])->name('fees.receipt');
    });
});
