<?php


namespace App\Api\Controllers;


use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionController
{
    public function newSubscriptionRecord(Request $request){




         $data =  $request->all();

         $user_id = Auth::user()->id;

         Subscription::create([
             'completed'=>$request->completed,
             "subscription_data"=>$data,
             "user_id"=>$user_id,

         ]);

         return $data;




    }

}