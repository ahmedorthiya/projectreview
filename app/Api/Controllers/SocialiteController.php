<?php


namespace App\Api\Controllers;
use Illuminate\Http\Request;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\GoogleProvider;

class SocialiteController
{

    public function googleLogin(){

    return Socialite::driver("google")->stateless()->redirect();
 //     return Socialite::driver('google')->stateless()->scopes(['profile'])->redirect();



    }

    public function handleGoogleProviderCallback()
    {
        $user = Socialite::driver("google")->stateless()->user();
        return $user->token;
    //   dd($user->token);

//        try {
//            $socialite = Socialite::driver("google")->user();
//            dd($socialite);
//        } catch (InvalidStateException $e) {
//            $socialite = Socialite::driver("google")->stateless()->user();
//            dd($socialite);
//        }


//        dd($user);

//        $parameters = ['access_type' => 'offline'];
//
//        $driver = \Laravel\Socialite\Facades\Socialite::driver('google')->with($parameters);
//        $user = $driver->stateless()->user();
//        dd($user);

//        try {
//            $user = Socialite::driver('google')->stateless()->user();
//            dd($user);
//        } catch (Exception $e) {
//            return Redirect::to('login/google');
//        }

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