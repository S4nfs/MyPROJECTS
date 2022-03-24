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

        $data->name= "vishal";
        $data->email="visal@gmail.com";
        $data->address="Gol Chawk Shardapur";
        $data->save();
    }
}
