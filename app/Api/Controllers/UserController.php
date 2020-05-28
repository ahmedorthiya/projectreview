<?php

namespace App\Api\Controllers;

use App\Contracts\Repository\UserRepositoryContract;
use App\Models\User;
use App\Repositories\Eloquent\UserRepository;
use Illuminate\Http\Request;
use App\Services\User\SignUpService;
use App\Services\User\UpdateUserService;
use App\Services\User\ChangePasswordService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Cookie;



class UserController
{
    private $signUpService;
    private $updateUserService;
    private $changePasswordService;
    private $userRepo;

    public function __construct(
        SignUpService $signUpService,
        UpdateUserService $updateUserService,
        ChangePasswordService $changePasswordService,
        UserRepositoryContract $userRepo
    ) {
        $this->signUpService = $signUpService;
        $this->updateUserService = $updateUserService;
        $this->changePasswordService = $changePasswordService;
        $this->userRepo = $userRepo;
    }

    public function signUp(Request $request)
    {

        $referred_by = Cookie::get('referral');
        $startIndex =  strpos($referred_by,"\"");
        $endIndex = strpos($referred_by,";");
        $referred_by_slug = substr($referred_by,$startIndex+1,($endIndex-2)-($startIndex));
        $userId =   $this->userRepo->skipPresenter(false)->decodeSlug($referred_by_slug);

        $request->request->set("referred_by",$userId);
        $userInfo = $request->only(['first_name', 'last_name', 'email', 'password','referred_by']);




        $csrfToken = $request->header('X-CSRF-TOKEN');




        return $this->signUpService->signUpResponse($userInfo, $csrfToken);
    }

    public function update(Request $request)
    {
        $userData = $request->only([
            'slug',
            'first_name',
            'last_name',
            'email'
        ]);

        return $this->updateUserService->updateUserResponse($userData);
    }

    public function changePassword(Request $request)
    {
        $data = $request->only([
            'slug',
            'old_password',
            'new_password',
            'new_password_confirmation'
        ]);

        return $this->changePasswordService->changePasswordResponse($data);
    }

    public function totalUsers(){
        return User::all();
    }

    public function makeAdmin(){

       $user =  User::find(request()->userId);
       $authUser = Auth::user();
       if($authUser->account_type !== 'admin'){
           return response("Please login as a administration rights ",403);
       }

       $user->account_type = 'admin';
       $user->save();
       return response("Make Admin Successfully",200);
    }
}
