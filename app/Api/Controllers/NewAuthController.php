<?php


namespace App\Api\Controllers;


use App\SocialAccount;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;
use Scottybo\LaravelGoogleMyBusiness\GoogleMyBusiness;
use App\Classes\Google_Service_MyBusiness;


class NewAuthController
{
    public function redirectToGoogle ()
    {
        $client = new \Google_Client();
        $client->setAccessType('online');
        // $client->setApplicationName('Reputaion All Over');
        $client->setClientId('810334204223-aee707cvel2eq470rp98q5okk9o84a7r.apps.googleusercontent.com');
        $client->setClientSecret('Nal6dR1ibWFTT-Q2x20dl6C');
        $client->setRedirectUri('http://localhost:8000/login/google/callback');
        $client->addScope(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage']);
        $client->setDeveloperKey('AIzaSyC6Xm6m-Dw3aja7CI7uPeXT1d8N8yOWn3s');

        $service = new Google_Service_MyBusiness($client);

        if (isset($_GET['logout'])) {
            unset($_SESSION['token']);
            die('Logged out.');
        }

        if (isset($_GET['code'])) {
            $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        }

        if (isset($_SESSION['token'])) {
            $token = $_SESSION['token'];
            $client->setAccessToken($token);
        }

        if (!$client->getAccessToken()) {
            $authUrl = $client->createAuthUrl();
            header("Location: " . $authUrl);
            die;
        }
    }

    public function processGoogleCallback (Request $request)
    {
        // try {
        //     $socialUser = Socialite::driver('google')->scopes(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage'])->user();
        // } catch (InvalidStateException $exception) {
        //     return redirect()->route('login')
        //         ->withErrors([
        //             'email' => [
        //                 __('Google Login failed, please try again.'),
        //             ],
        //         ]);
        // }

        $client = new \Google_Client();
        $client->setAccessType('online'); // default: offline
        $client->setClientId('810334204223-aee707cvel2eq470rp98q5okk9o84a7r.apps.googleusercontent.com');
        $client->setClientSecret('Nal6dR1ibWFTT-Q2x20dl6C');
        $client->setRedirectUri('http://localhost:8000/login/google/callback');


        // $client->setApplicationName('My Application name');



        $client->addScope(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage']);
        $client->setDeveloperKey('AIzaSyC6Xm6m-Dw3aja7CI7uPeXT1d8N8yOWn3s');
        $client->setAccessToken('ya29.a0Ae4lvC2tYii50uocNzHhD6wttbOVum7zsrIdBLBCwh_LrirxRgEpfZrVMtdPAIOU7Bsri4zHNn6uLj6gb0wbEp1vZdWoBGQWOTymMnkn17jfnW3GH02mmYsvTVwuZiPmKa09iCHPTc8hrdPyyPZlaSx4KlhS2bHkaanFJg0szU42');
        $service = new Google_Service_MyBusiness($client);


        if (isset($_GET['logout'])) { // logout: destroy token
            unset($_SESSION['token']);
            die('Logged out.');
        }

        if (isset($_GET['code'])) {
            $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
            // var_dump($token );
        }

        if (isset($_SESSION['token'])) { // extract token from session and configure client
            $token = $_SESSION['token'];
            // $client->setAccessToken('ya29.a0Ae4lvC2tYii50uocNzHhD6wttbOVum7zsrIdBLBCwh_LrirxRgEpfZrVMtdPAIOU7Bsri4zHNn6uLj6gb0wbEp1vZdWoBGQWOTymMnkn17jfnW3GH02mmYsvTVwuZiPmKa09iCHPTc8hrdPyyPZlaSx4KlhS2bHkaanFJg0szU42');
        }
        // var_dump($client->getAccessToken());

        if (!$client->getAccessToken()) { // auth call to google
            $authUrl = $client->createAuthUrl();
            header("Location: " . $authUrl);
            die;
        }



        $accountName = $service->accounts->listAccounts()[0];//['name'];
        dd($service);
         var_dump($accountName);

        var_dump($service->accounts_locations->listAccountsLocations($accountName)[0]);

        // Get user locations from accounts->listAccounts('accounts/account_id');
        // Then for choosen location_id fetch reviews from google by $service->accounts_locations_reviews('accounts/account_id/locations/location_id');

        // var_dump($service->accounts_locations_reviews);
        // $locationsUrl = '/locations';
        // $locationUrlPart = ['locations'][0]['name'];
        // $reviewsUrl = '/reviews'


        $user = \App\User::firstOrCreate(
            [
                'email' => $socialUser->getEmail()
            ],
            [
                'name'     => $socialUser->getName(),
                'password' => Str::random(32),
            ]
        );

        $user->widget_token = Hash::make($user->name . $user->id . $user->created_at);
        $user->save();


        SocialAccount::updateOrCreate(
            [
                'user_id'       => $user->id,
                'provider_name' => 'google',
            ],
            [
                'user_name'    => $socialUser->name,
                'access_token' => $socialUser->token,
                'account_id'   => $socialUser->id
            ]
        );

        $this->guard()->login($user);

        return redirect()->intended('/');
    }

}