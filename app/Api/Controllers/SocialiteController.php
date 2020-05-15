<?php


namespace App\Api\Controllers;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController
{

    public function googleLogin(){

        return Socialite::driver("google")->redirect();
    }

    public function handleGoogleProviderCallback()
    {
        $user = Socialite::driver('google')->user();

        // $user->token;
    }

    public function facebookLogin(){

        return Socialite::driver("facebook")->redirect();
    }

    public function handleFacebookProviderCallback()
    {
        $user = Socialite::driver('facebook')->user();

        // $user->token;
    }

}