<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DummyAPI extends Controller
{
    function getData(){
        return ["name"=>"sagar", "email"=>"sagar@gmail.com"];
    }
}
