<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'google' => [
        'GOOGLE_ACTIVE'=>true,
       // 'client_id' => '810334204223-aee707cvel2eq470rp98q5okk9o84a7r.apps.googleusercontent.com',
        'client_id' => '468027039612-4unngsa1ep87rphjjmfjps8fdp612dvk.apps.googleusercontent.com',
       // 'client_secret' => 'Nal6dR1ibWFTT-Q2x20dl6C',
        'client_secret' => 'AJn9dOWgtavCV_Z2LWYu21Mz',
        'redirect' => 'http://localhost:9000/login/google/callback',
        'proxy'=>true,



    ],

    'facebook' => [
        "FACEBOOK_ACTIVE"=>true,
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'redirect' => "https://localhost:8000/login/facebook/callback",

    ],


    'linkedin'=>[
        'client_id'=>'777h58agg5ppi0',
        'client_secret'=>'rZPxJtLu2hjBrDmQ',
        'redirect'=>'http://localhost:8000/login/linkedin/callback',
    ]

];
