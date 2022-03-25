<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demo;

class LearnAccessorsMutators extends Controller
{

    function accessorss(){
        return Demo::all();
    }


    function mutatorss(){
        $data = new Demo;

        $data->name= "ajay";
        $data->email="ajay@gmail.com";
        $data->address="Naveen Mandi";
        $data->save();
    }
}
