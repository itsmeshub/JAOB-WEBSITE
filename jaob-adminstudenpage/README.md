# JAOB Admin Panel + Student Dashboard

Laravel module covering **only** the Admin Panel and Student Dashboard for JAOB.
The rest of the site (Home, About, Admission info pages, Government Letters,
Gallery, etc.) stays as the existing React site — this is a separate module,
meant to be linked from a "Login" button on the main site.

---

## 1. What's in here

- Two completely separate auth guards: `admin` and `student` (see `config/auth.php`).
  A student session can never satisfy `auth:admin` and vice versa — they read
  from different tables (`admins` / `students`) with different session data.
- Public `/apply` form → `applications` table (no login required).
- Admin approves/rejects an application. **Approve** auto-creates a `students`
  row + a freshly generated Student ID and password, shown once on screen.
- Admin manages students, exams, results (with a publish/unpublish toggle),
  and fees.
- Students log in with Student ID + password (no self-registration exists
  anywhere in the codebase) and can view published results, download their
  marksheet/admit card/fee receipts (PDF via `barryvdh/laravel-dompdf`), and
  edit their own contact details only.

---

## 2. Decisions made without a client sign-off (see original brief's "confirm with client" section)

The original spec listed three open questions. Sensible defaults were
implemented so the build isn't blocked — all are easy to change later:

1. **How credentials reach the student** → shown on-screen to the admin only,
   once, right after approval (`resources/views/admin/applications/show.blade.php`).
   Nothing is emailed or SMS'd automatically. `config/services.php` has a
   `sms_gateway` stub and `.env.example` has mail settings ready if you want
   to wire up auto-delivery later — just call `Mail::to(...)` /  an SMS
   provider inside `StudentOnboardingService::approve()`.
2. **Can students edit their own profile?** → Students can edit **contact
   info only** (email, mobile, address) via `/student/profile`. Everything
   else (name, DOB, class, category, etc.) is admin-only edit, since it
   comes from the reviewed application.
3. **Marksheet / Admit Card / Fee Receipt design** → clean generic layout
   (`resources/views/pdf/*.blade.php`), not matched to an official format.
   Swap these Blade files for an official template whenever you have one.

## 3. Theme note

The build brief said "blue/primary color theme," but the actual uploaded
React site (`tailwind.config.js`) uses an **emerald green** primary palette
(`#059669` etc.). This Laravel module's Tailwind config (in
`resources/views/layouts/base.blade.php`) was matched to the real site
colors, not the brief's description.

---

## 4. Local setup

Requires PHP 8.3+, Composer, and MySQL.

```bash
composer install
cp .env.example .env
php artisan key:generate

# Edit .env — set DB_DATABASE / DB_USERNAME / DB_PASSWORD to your MySQL creds

php artisan migrate --seed
php artisan storage:link
php artisan serve
```

- Admin login: `http://localhost:8000/admin/login` — seeded account is
  `admin@jaobonline.org` / `ChangeMe@123` (change this immediately — there's
  no admin self-service password reset wired up by default).
- Public apply form: `http://localhost:8000/apply`
- Student login: `http://localhost:8000/student/login`

## 5. Tailwind via CDN — and how to switch to a compiled build

To avoid requiring a Node build step on shared hosting, the Blade views load
Tailwind from `cdn.tailwindcss.com` with the site's exact color tokens
configured inline (see `resources/views/layouts/base.blade.php`). This works
out of the box with zero `npm` setup.

If you'd rather compile Tailwind properly (recommended for production, since
the CDN build is meant for prototyping and ships the full framework
uncompiled):

1. `npm install -D tailwindcss @tailwindcss/vite` and set up
   `resources/css/app.css` + `vite.config.js` the standard Laravel way.
2. Move the color config from the inline `<script>` in `base.blade.php` into
   `tailwind.config.js`.
3. Replace the CDN `<script>` tag with `@vite('resources/css/app.css')`.
4. `npm run build`, commit `public/build`, and it'll work identically on
   shared hosting with no Node runtime required at request time.

## 6. Deployment to cPanel shared hosting

1. Upload everything **except** `vendor/` and `node_modules/` (or upload
   everything and just exclude those in your zip — either works).
2. SSH in (or use cPanel's Terminal) and run `composer install --no-dev --optimize-autoloader`
   in the project root.
3. Point the domain/subdomain's **document root** at this project's `public/`
   folder. For a subfolder setup like `yourdomain.com/dashboard`, the cleanest
   approach on shared hosting is:
   - Put this whole project **outside** `public_html`, e.g. in
     `~/jaob-dashboard/`.
   - Create a subfolder `public_html/dashboard/` containing just an
     `index.php` that requires `../../jaob-dashboard/public/index.php`
     with adjusted paths (cPanel's "Application Manager" for PHP apps, if
     available, automates this — check your host's docs), OR
   - If your host supports it, create `dashboard` as an **addon
     domain/subdomain** whose document root is set directly to
     `~/jaob-dashboard/public`.
4. Set `.env`: `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL` to the
   final public URL, and your live MySQL credentials (create the DB + user
   in cPanel's MySQL Databases tool first).
5. `php artisan key:generate --force`
6. `php artisan migrate --force --seed` (or just `--force` if you don't want
   the demo admin seeded — then create your first admin via `php artisan tinker`).
7. `php artisan storage:link` (serves uploaded photos/documents).
8. `php artisan config:cache && php artisan route:cache && php artisan view:cache`
   for production performance.
9. Make sure `storage/` and `bootstrap/cache/` are writable by the web server
   user (`chmod -R 775` is usually enough on shared hosting; avoid 777).

## 7. Admin guide: how student credentials work

1. A visitor submits `/apply` — no login needed. This creates a row in
   `applications` with a generated number like `JAOB2026000123`.
2. An admin opens **Applications** in the admin panel, reviews the details
   and uploaded documents, and clicks **Approve** (or **Reject** with
   remarks).
3. On Approve, the system immediately:
   - Creates a `students` row from the application data.
   - Generates a Student ID like `JAOB-STU-2026-00042`.
   - Generates a random 10-character password (avoids ambiguous characters
     like `0`/`O` and `1`/`l`/`I`).
   - Shows both **once**, directly on the application review screen. This
     plain-text password is never written to the database or any log — only
     its bcrypt hash is stored.
4. The admin is responsible for manually telling the student their
   credentials (in person, by phone, or by copying them into an email/SMS
   themselves) — there's no automatic delivery.
5. If a student loses their password, an admin can generate a new one any
   time from **Students → [student] → Reset Password**. Same one-time-reveal
   rule applies.
6. Students never register themselves — there is no such route or page
   anywhere in this app by design.

## 8. Security notes

- `auth:admin` and `auth:student` route middleware groups are fully separate
  (`routes/web.php`) — nothing shared between them.
- Every student-facing controller resolves "the student" from
  `Auth::guard('student')->user()` — **never** from a route or query
  parameter — so a logged-in student cannot view another student's
  results/marksheet/fees by editing a URL. See
  `app/Http/Controllers/Student/DocumentController.php` for the explicit
  ownership checks on fee receipts and admit cards.
- File uploads (`app/Http/Requests/Public/StoreApplicationRequest.php`) are
  restricted to PDF/JPG/PNG, max 5MB, on both the applicant photo and
  supporting documents.
- CSRF protection is on by default (Laravel's `web` middleware group) and
  every form in this app includes `@csrf`.
- Passwords are bcrypt-hashed automatically via each model's `password =>
  'hashed'` cast — no plaintext ever touches the `students`/`admins` tables.

## 9. A note on how this was built

Composer packages could not be installed in the sandbox this project was
generated in (Packagist was network-blocked), so this codebase was
hand-written to match Laravel 13 conventions and every PHP file was
individually checked with `php -l` for syntax errors — but it has **not**
been run end-to-end with `composer install` + `php artisan serve` +
`php artisan migrate`. Please run through the local setup steps above as a
first smoke test before deploying, and open an issue/flag anything that
doesn't boot cleanly so it can be fixed.
