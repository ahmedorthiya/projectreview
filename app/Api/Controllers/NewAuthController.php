<?php


namespace App\Api\Controllers;


use App\SocialAccount;
use App\Models\User;
use GuzzleHttp\Client;
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
    public function googleLogin ()
    {
        $client = new \Google_Client();
        $client->setAccessType('online');
        // $client->setApplicationName('Reputaion All Over');
        //$client->setClientId('810334204223-aee707cvel2eq470rp98q5okk9o84a7r.apps.googleusercontent.com');
        $client->setClientId('468027039612-4unngsa1ep87rphjjmfjps8fdp612dvk.apps.googleusercontent.com');
        $client->setClientSecret('AJn9dOWgtavCV_Z2LWYu21Mz');
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

    public function handleGoogleProviderCallback (Request $request)
    {
//         try {
//             $socialUser = Socialite::driver('google')->stateless()->user();
//         } catch (InvalidStateException $exception) {
//             dd($exception);
//             return redirect()->route('login')
//                 ->withErrors([
//                     'email' => [
//                         __('Google Login failed, please try again.'),
//                     ],
//                 ]);
//         }
         //->scopes(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage'])

        $client = new \Google_Client();
        $client->setAccessType('online'); // default: offline
      //  $client->setClientId('810334204223-aee707cvel2eq470rp98q5okk9o84a7r.apps.googleusercontent.com');
       // $client->setClientSecret('Nal6dR1ibWFTT-Q2x20dl6C');
        $client->setClientId('468027039612-4unngsa1ep87rphjjmfjps8fdp612dvk.apps.googleusercontent.com');
        $client->setClientSecret('AJn9dOWgtavCV_Z2LWYu21Mz');
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

//        $locationName = 'accounts/111050869667910417441/locations/17405754705905257334/';

//        $sendReq = new Client();
//        $value=        $sendReq->request('GET', 'https://mybusiness.googleapis.com/v4/accounts/100823404851251882974/locations/17405754705905257334/reviews??access_token='.'ya29.a0AfH6SMB4e3mvsNUmny1IlOB9oS6WrjPifrAwlqAmfOGsyrTLmEUV9BenoNf9gkqf_tH7DRPH0g4G_BwE6mHDPchqSdh4x3T05CqFN4hME14uJbcG3kvMY7T6NXVbn8RaRWIPrhVWdbyVXduuNLV9NBR86hnSE3prPco');
//        dd($value);
//        $mybusinessService = new Google_Service_Mybusiness($client);
//
//        $reviews = $mybusinessService->accounts_locations_reviews;
//
//        do{
//            $listReviewsResponse = $reviews->listAccountsLocationsReviews($locationName);
//            dd($listReviewsResponse);
//
//            $reviewsList = $listReviewsResponse->getReviews();
//            foreach ($reviewsList as $index => $review) {
//
//                dd($review);
//                /*Accesing $review Object
//
//
//
//                * $review->createTime;
//                * $review->updateTime;
//                * $review->starRating;
//                * $review->reviewer->displayName;
//                * $review->reviewReply->comment;
//                * $review->getReviewReply()->getComment();
//                * $review->getReviewReply()->getUpdateTime();
//                */
//
//            }
//
//        }while($listReviewsResponse->nextPageToken);



      // dd( var_dump($accountName));






         //Get user locations from accounts->listAccounts('accounts/account_id');
         //Then for choosen location_id fetch reviews from google by $service->accounts_locations_reviews('accounts/account_id/locations/location_id');
       // $account_id = $service->accounts->listAccounts('accounts/account_id');
       //  $location_id = $service->accounts_locations_reviews('accounts/account_id/locations/location_id');
        // dd($account_id." ".$location_id);
        // var_dump($service->accounts_locations_reviews);
       //  $locationsUrl = '/locations';
         //$locationUrlPart = ['locations'][0]['name'];
        // $reviewsUrl = '/reviews'
      //  dd($token);
       $socialUser =  Socialite::driver('google')->userFromToken($token);

         dd($socialUser);

//        $user = \App\User::firstOrCreate(
//            [
//                'email' => $socialUser->getEmail()
//            ],
//            [
//                'name'     => $socialUser->getName(),
//                'password' => Str::random(32),
//            ]
//        );
//
//        $user->widget_token = Hash::make($user->name . $user->id . $user->created_at);
//        $user->save();



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