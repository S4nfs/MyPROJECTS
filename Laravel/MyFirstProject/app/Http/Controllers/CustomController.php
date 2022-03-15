<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomController extends Controller
{
    function loadview(){
        return view('custom', ['name'=> 'Sagar']); //'name' is a variable here passes to custom.blade
    }
}
