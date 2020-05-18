<?php

namespace App\Models;


class Subscription extends Model
{
    //
    protected $casts = [
        'subscription_data' => 'array'
    ];
}
