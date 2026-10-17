<?php

return [

    'name' => env('APP_NAME', 'JAOB Dashboard'),

    'env' => env('APP_ENV', 'production'),

    'debug' => (bool) env('APP_DEBUG', false),

    'url' => env('APP_URL', 'http://localhost'),

    'timezone' => env('APP_TIMEZONE', 'Asia/Kolkata'),

    'locale' => env('APP_LOCALE', 'en'),

    'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),

    'faker_locale' => 'en_IN',

    'cipher' => 'AES-256-CBC',

    'key' => env('APP_KEY'),

    'previous_keys' => [
        ...array_filter(explode(',', env('APP_PREVIOUS_KEYS', ''))),
    ],

    'maintenance' => [
        'driver' => env('APP_MAINTENANCE_DRIVER', 'file'),
        'store' => env('APP_MAINTENANCE_STORE', 'database'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Institute details (used across admin panel + generated PDFs)
    |--------------------------------------------------------------------------
    */
    'institute' => [
        'short_name' => env('INSTITUTE_NAME', 'JAOB'),
        'full_name' => env('INSTITUTE_FULL_NAME', 'Jharkhand Academic and Occupational Board'),
        'address' => env('INSTITUTE_ADDRESS', 'Bokaro, Jharkhand, India'),
    ],

];
