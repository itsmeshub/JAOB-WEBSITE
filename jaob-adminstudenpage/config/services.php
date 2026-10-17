<?php

return [

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Optional SMS gateway for sending student login credentials by SMS
    |--------------------------------------------------------------------------
    | Not wired up by default (credentials are shown on-screen to the admin
    | only — see README "Credential delivery" section). Left here as a place
    | to drop in an API key if the client later wants SMS delivery.
    */
    'sms_gateway' => [
        'api_key' => env('SMS_GATEWAY_API_KEY'),
        'sender_id' => env('SMS_GATEWAY_SENDER_ID', 'JAOB'),
    ],

];
