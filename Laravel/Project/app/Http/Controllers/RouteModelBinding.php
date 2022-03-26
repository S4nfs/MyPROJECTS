<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;

class RouteModelBinding extends Controller
{

    //Route Model Binding
    function rbm(Device $mykey)
    {
        return $mykey;
    }
}
