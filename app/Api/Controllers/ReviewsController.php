<?php


namespace App\Api\Controllers;
use http\Client\Response;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ReviewsController
{
   public function generalInfo(Request $request){

//       $client = new Client();
//       $res = $client->request('GET', 'http://localhost:3000/overall_reviews_info');
//
//
//       $result= $res->getBody();

       $json = file_get_contents(base_path("db.json"));
       $data = json_decode($json,true);

      // return $resLocations;

       return $data['overall_reviews_info'];

       //dd($result);
     //  return $resLocations;




   }
   public function locations(Request $request){
       $json = file_get_contents(base_path("db.json"));
       $data = json_decode($json,true);

       // return $resLocations;

       return $data['reviews'];
   }

   public function specificUserReviews(Request $request){
       $json = file_get_contents(base_path("db.json"));
       $data = json_decode($json,true);

       // return $resLocations;

       return $data['reviews'];
   }

   public function widgetReviews(Request $request){
       $json = file_get_contents(base_path("db.json"));
       $data = json_decode($json,true);

       // return $resLocations;

       return $data['widget-reviews'];
   }

}