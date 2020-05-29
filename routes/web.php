<?php

use ProtoneMedia\LaravelPaddle\Paddle;

$spa = function () {
    return view('app');
};

/**
 * Since the forgot password functionality requires a named route, create a
 * named route specifically for that here.
 */
Route::get('reset-password/{token}', $spa)->name('password.reset');


//Route::group(['middleware' => 'web'], function () {
//
//
//
//});

Route::get("/check-user-with-earning",function(){
    dd(\Illuminate\Support\Facades\Auth::user());
});

Route::get("/widget.js",'\App\Api\Controllers\HomeController@widget');

Route::get("/login/google",'\App\Api\Controllers\NewAuthController@redirectToGoogle');

Route::get("/login/google/callback",'\App\Api\Controllers\NewAuthController@processGoogleCallback');
Route::get("/login/facebook/callback",'\App\Api\Controllers\SocialiteController@handleFacebookProviderCallback');





//Route::get("/check/{check}",function (){
//    dd(request()->check);
//});


Route::get("/reviews-info/{review}","\App\Api\Controllers\ReviewsController@generalInfo");

Route::get("/user",function(){
    $json = file_get_contents(base_path("db.json"));
    $data = json_decode($json,true);
    return $data['overall_reviews_info'];

});



/**
 * Catchall route for the single page application
 */
Route::get('/{view?}', $spa)->where('view', '(.*)')->name('catchall');
