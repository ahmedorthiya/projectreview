<?php

$spa = function () {
    return view('app');
};

/**
 * Since the forgot password functionality requires a named route, create a
 * named route specifically for that here.
 */
Route::get('reset-password/{token}', $spa)->name('password.reset');


Route::group(['middleware' => 'web'], function () {

    Route::get("/login/google/callback",'\App\Api\Controllers\SocialiteController@handleGoogleProviderCallback');
    Route::get("/login/facebook/callback",'\App\Api\Controllers\SocialiteController@handleFacebookProviderCallback');


});




//Route::get("/check/{check}",function (){
//    dd(request()->check);
//});


Route::get("/reviews-info/{review}","\App\Api\Controllers\ReviewsController@generalInfo");


/**
 * Catchall route for the single page application
 */
Route::get('/{view?}', $spa)->where('view', '(.*)')->name('catchall');
