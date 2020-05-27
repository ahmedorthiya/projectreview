<?php


namespace App\Api\Controllers;
use http\Client\Response;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ReviewsController
{
   public function generalInfo(Request $request){

       $client = new Client();
       $res = $client->request('GET', 'http://localhost:3000/overall_reviews_info');


       $result= $res->getBody();
      // return $resLocations;

       return $result;

       //dd($result);
     //  return $resLocations;




   }
   public function locations(Request $request){
       $client = new Client();
       $resLocations = $client->request('GET', 'http://localhost:3000/reviews')->getBody();

       // in actual return only locations and not other data

       return $resLocations;

   }

   public function specificUserReviews(Request $request){
       $client = new Client();
       $res = $client->request('GET', 'http://localhost:3000/reviews')->getBody();



       return $res;
   }

   public function widgetReviews(Request $request){
       $client = new Client();
       return $client->request("GET","http://localhost:3000/widget-reviews")->getBody();
   }

}