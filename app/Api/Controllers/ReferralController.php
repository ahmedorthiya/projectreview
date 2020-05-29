<?php


namespace App\Api\Controllers;
use App\Models\EarningByReferral;
use App\Models\ReferralLink;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function MongoDB\BSON\toJSON;

class ReferralController
{
    public function referredByInfo(){
        return $this->referredByUser();
    }

    private function referredByUser (){
        $referred_by_id = Auth::user()->referred_by;
        $user = User::find($referred_by_id);
        return $user;
    }

    public function store(Request $request){

        $request->validate([
            'referred_to_payment'=>'required',
            'referred_by_earning'=>'required',
        ]);



        if(!empty($this->referredByUser())) {



            ReferralLink::create([
                'referred_by' => $this->referredByUser()->id,
                'referred_to' => Auth::user()->id,
                'referred_to_payment' => $request->referred_to_payment,
                'referred_by_earning' => $request->referred_by_earning,
            ]);

            $record = EarningByReferral::where("user_id",$this->referredByUser()->id)->get()->count();
            if($record > 0){
               $earningRecord = $this->referredByUser()->earningByReferral;

               $earningRecord->amount = $earningRecord->amount + $request->referred_by_earning_int;
               $earningRecord->save();

            }else{
                EarningByReferral::create([
                    "user_id"=>$this->referredByUser()->id,
                    "amount"=>$request->referred_by_earning_int,

                ]);
            }

        }

       return "Data submit successfully";


    }

    public function usersEarning(){
        $earningUsersList = EarningByReferral::paginate(20);

        $records = array();
        foreach ($earningUsersList as $earning){

          $data =   json_encode(array(
                "name"=>$earning->user->first_name ." ". $earning->user->last_name,
                "id"=>$earning->id,
                "user_id"=>$earning->user->id,
                "email"=>$earning->user->email,
                "amount"=>$earning->amount,
                "phone"=>$earning->user->phone_number
            ));
          $records[] = $data;
        }

        array_push($records,$earningUsersList);


        return $records;


    }

    public function paid(Request $request){

        $earning = EarningByReferral::find($request->id);
        $earning->amount=0;
        $earning->save();
        return "User paid successfully";
    }



}