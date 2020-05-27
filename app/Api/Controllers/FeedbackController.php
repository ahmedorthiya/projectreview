<?php


namespace App\Api\Controllers;
use App\Models\Feeback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeedbackController
{
    public function newOne(Request $request){


        $file = $request->file("business_logo");
        $image = $file->store("uploads/feedback-business-logo");
       Feeback::create([
           'feedback_text'=>$request->feedback_text,
           "rating"=>$request->rating,
           "business_logo"=>$image,
           "user_id"=>Auth::user()->id,
       ]);

       return "Feedback submitted Successfully";
    }

}