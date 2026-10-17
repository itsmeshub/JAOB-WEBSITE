// Links to the existing Laravel/PHP backend (jaob-dashboard).
// These map 1:1 to the routes defined in jaob-dashboard/routes/web.php:
//   Route::get('/apply', ...)->name('apply.create');
//   Route::get('admin/login', ...)->name('admin.login');   (prefixed with 'admin')
//   Route::get('student/login', ...)->name('student.login'); (prefixed with 'student')
//
// LARAVEL_BASE_URL currently matches the local dev server used elsewhere in this
// codebase (see previous hardcoded links in TopBar.tsx / Footer.tsx). Update this
// single constant when deploying so every "Apply", "Admin Login", and
// "Student Login" link across the site points to the correct production URL.
export const LARAVEL_BASE_URL = "http://127.0.0.1:8000";

export const LARAVEL_APPLY_URL = `${LARAVEL_BASE_URL}/apply`;
export const LARAVEL_ADMIN_LOGIN_URL = `${LARAVEL_BASE_URL}/admin/login`;
export const LARAVEL_STUDENT_LOGIN_URL = `${LARAVEL_BASE_URL}/student/login`;
