<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Usercontroller extends Controller
{
    //

    // function show()
    // {
    //     return view('users');
    // }

    function show($customers){
        return view('users', ['name' => $customers]);
    }
}
