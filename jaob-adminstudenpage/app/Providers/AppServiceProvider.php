<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force HTTPS URL generation in production (useful behind a
        // load balancer / cPanel reverse proxy that terminates TLS).
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
