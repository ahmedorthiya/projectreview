<?php

namespace App\Models;



class EarningByReferral extends Model
{
    //
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
