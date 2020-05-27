<?php

namespace App\Api\Controllers;

use App\Models\User;
use App\Services\User\Avatar\CreateAvatarService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AvatarsController
{
    private $createAvatarService;

    public function __construct(
        CreateAvatarService $createAvatarService
    ) {
        $this->createAvatarService = $createAvatarService;
    }

    public function get()
    {
    }

    public function upload(Request $request)
    {
        $file = $request->file('files');
        $image  = $file->store("uploads/profiles");
       $user = Auth::user();
       $user->avatar = $image;
       $user->save();
       return "Pic updated Successfully";

    }

    public function update(Request $request)
    {
        //return $request->phone;
       $user = Auth::user();
       $user->first_name=$request->firstName;
       $user->last_name=$request->lastName;
       $user->email=$request->email;
       $user->phone_number=$request->phone;
       $user->country=$request->country;
       $user->save();
       return "update record successfully";
    }

    public function delete()
    {
    }
}
