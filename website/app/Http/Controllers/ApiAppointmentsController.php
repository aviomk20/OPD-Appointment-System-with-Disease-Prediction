<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Appointment;
use App\Models\Doctor;
class ApiAppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $Appointments = DB::table('appointments')
                                ->where([['patient_id', '=', $user->id]])
                                ->get()->toArray();

        $response = [
                    'appointment' => $Appointments,
                    'code' => 200
                  ];

      return response($response, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            "patient_name" => "required",
            "reason" => "required",
            "Time_and_Date" => "required"
        ]);

        $user = $request->user();
        
      //  $doctor = Doctor::first();

        $available = DB::table("slots")->where([
                ["Slot_date", "=", $request->Time_and_Date],
                ["Slot_is_available", "=", "0"]])->get()->toArray();
        if($available == NULL)
            {
                $Appointments = DB::table('appointments')
                                    ->where([
                                    ["Time_and_Date", '=', $request->Time_and_Date]])
                                    ->count();
                $hasMoreAppointmentstoday = DB::table("slots")->where([
                    ["Slot_date", "=", $request->Time_and_Date],
                    ["Slot_is_available", "=", 0]])->get()->toArray();
                if($Appointments <= 2)
                {
                    $inputs["patient_id"] = $user->id;
                    $inputs["patient_name"] = $request->patient_name;
                    $inputs["reason"] = $request->reason;
                    $inputs["appointment_status"] = 0;
                    $inputs["Time_and_Date"] = $request->Time_and_Date;
                    $appoint = Appointment::create($inputs);
                    $response = [
                        'message' => "success",
                        'appointment' => $appoint,
                        'code' => 200
                    ];
                    return response($response,200);
                }
            }


            $response = [
                'message' => "error",
                'code' => 201
            ];
            return response($response,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment->appointment_status = 1;
        $appointment->save();
        $appointment = "Success";
        return response($appointment, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $appointment->appointment_status = 3;
        $appointment->save();

        return response(201);
    }
}
