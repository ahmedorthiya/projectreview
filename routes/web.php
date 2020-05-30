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



//Route::get("/login/google",'\App\Api\Controllers\SocialiteController@googleLogin');
//Route::get("/login/google/callback",'\App\Api\Controllers\SocialiteController@handleGoogleProviderCallback');


Route::get("/login/linkedin",'\App\Api\Controllers\SocialiteController@linkedinLogin');
Route::get("/login/linkedin/callback",'\App\Api\Controllers\SocialiteController@handleLinkedInCallback');

Route::get("/reviews-info/{review}","\App\Api\Controllers\ReviewsController@generalInfo");





/**
 * Catchall route for the single page application
 */
Route::get('/{view?}', $spa)->where('view', '(.*)')->name('catchall');
