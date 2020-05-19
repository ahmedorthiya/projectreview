<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/users/me', '\App\Api\Controllers\SessionController@currentUser');
    Route::get('/logout', '\App\Api\Controllers\SessionController@logout');

    Route::apiResource('/users', '\App\Api\Controllers\UserController');
    Route::put('/users/{slug}/update-password', '\App\Api\Controllers\UserController@changePassword');

    Route::get('/avatars', '\App\Api\Controllers\AvatarsController@get');
    Route::post('/avatars', '\App\Api\Controllers\AvatarsController@upload');
    Route::put('/avatars', '\App\Api\Controllers\AvatarsController@update');
    Route::delete('/avatars', '\App\Api\Controllers\AvatarsController@delete');



});


Route::group(['middleware' => 'web'], function () {

    Route::get("/login/google",'\App\Api\Controllers\SocialiteController@googleLogin');
    Route::get("/login/facebook",'\App\Api\Controllers\SocialiteController@facebookLogin');

});

Route::group(['middleware' => ['encryptCookies']], function () {
    Route::post('/login', '\App\Api\Controllers\SessionController@login');
    Route::post('/signup', '\App\Api\Controllers\UserController@signup');




});




/**
 * Password reset endpoints
 */
Route::post('/forgot-password', '\App\Api\Controllers\PasswordResetController@forgotPassword');
Route::post('/reset-password', '\App\Api\Controllers\PasswordResetController@resetPassword');

/**
 * These endpoints return JWT's, so make sure to wrap them in the encrypt cookies
 * middleware.
 */

//reviews api




Route::group(['middleware' => ['auth:api']],function (){
    Route::get("/reviews-info/{review}","\App\Api\Controllers\ReviewsController@generalInfo");
    Route::get("/reviewer-locations/{review}","\App\Api\Controllers\ReviewsController@locations");
    Route::get("/user-reviews/{review}","\App\Api\Controllers\ReviewsController@specificUserReviews");
    Route::post("/subscriptions","\App\Api\Controllers\SubscriptionController@newSubscriptionRecord");
    Route::get("/total-users","\App\Api\Controllers\UserController@totalUsers");


});




