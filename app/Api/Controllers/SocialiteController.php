<?php


namespace App\Api\Controllers;
use App\Models\User;
use App\Services\Session\LoginService;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Facades\Socialite;
use App\Classes\Google_Service_MyBusiness;
use Laravel\Socialite\Two\GoogleProvider;
use GuzzleHttp\Client;
use Yaf\Response\Cli;
use Happyr\LinkedIn;

class SocialiteController
{
    private $loginService;

    public function __construct(
        LoginService $loginService

    ) {
        $this->loginService = $loginService;

    }

    public function googleLogin(){
 return Socialite::driver("google")->scopes(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage'
     ,'https://www.googleapis.com/auth/drive',
     'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'])->redirect();
//        return Response::json([
//            'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
//        ]);



    }

    public function handleGoogleProviderCallback(Request $request)
    {
        $user = Socialite::driver("google")->stateless()->scopes(['https://www.googleapis.com/auth/business.manage', 'https://www.googleapis.com/auth/plus.business.manage'
            ,'https://www.googleapis.com/auth/drive',
     'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'])->user();

        $userModel = new User();


        $userLoggedIn = $userModel->findOrCreateUser($user->getEmail(),$user->getName(),"google",$user->getId());

        $csrfToken = $request->header('X-CSRF-TOKEN');



//        $clientRequest = new Client();
//        $res = $clientRequest->request('GET', 'https://mybusiness.googleapis.com/v3/accounts/'.$user->getId().'/locations');
//      dd($res->getBody());







       return $this->loginService->socialLogin($userLoggedIn,$csrfToken,$user->token);

    }

    public function facebookLogin(){

        return Socialite::driver("facebook")->redirect();
    }

    public function handleFacebookProviderCallback()
    {
        $user = Socialite::driver('facebook')->user();

        // $user->token;
    }

    public function linkedinLogin(){

        return Socialite::driver("linkedin")->stateless()->scopes(['r_liteprofile', 'r_emailaddress'])->redirect();


    }

    public function handleLinkedInCallback(){
       $user = Socialite::driver("linkedin")->scopes(['r_liteprofile', 'r_emailaddress'])->stateless()->user();

      // dd($user);

       $client = new Client(['headers' => ['Authorization'=> 'Bearer '.$user->token
       ]]);
       $res = $client->request("GET","https://api.linkedin.com/v2/people/~:(id,first-name,skills,educations,recommendations-received,twitter-accounts)?format=json");
       return $res->getBody();

//        $headers = [
//            'Host'=>' api.linkedin.com',
//'Connection'=> 'Keep-Alive',
//'Authorization'=>'Bearer '.$user->token,
//        ];
//
//        $client = new GuzzleClient();
//        $res = $client->request("",$headers,)
//
//       $res = $client->request("GET","");


//       dd($res->getBody());
    }

}