<?php

namespace App\Models;

use Balping\HashSlug\HasHashSlug;
use Illuminate\Support\Facades\Cookie;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasHashSlug;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'avatar',
        'account_type',
        'provider',
        'provider_id',
        'phone_number',
        'country',
        'referred_by',
        'remember_token'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setPasswordAttribute($password)
    {
        $hash = resolve('Illuminate\Contracts\Hashing\Hasher');
        $this->attributes['password'] = $hash->make($password);
    }

    public  function findOrCreateUser($email, $name, $provider, $provider_id)
    {
        if ($user = User::where(['email' => $email, 'provider' => $provider, 'provider_id' => $provider_id])->first()) {
            return $user;
        }



        return User::create([
            'first_name' => $name,
            'last_name'=>"",
            'email'    => $email,
            'password' => bcrypt("1!y3&SJA1qk*9j"),
            'provider' => $provider,
            'provider_id' => $provider_id,


        ]);
    }

    public function earningByReferral(){
        return $this->hasOne(EarningByReferral::class);
    }
}
