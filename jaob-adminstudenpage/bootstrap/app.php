<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Both guards share the default 'web' middleware group (sessions, CSRF, cookies).
        // Route-level `auth:admin` / `auth:student` middleware (registered by Laravel's
        // AuthServiceProvider) keeps the two panels completely separate — see routes/web.php.
        $middleware->redirectGuestsTo(function ($request) {
            return $request->is('admin/*')
                ? route('admin.login')
                : route('student.login');
        });
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
