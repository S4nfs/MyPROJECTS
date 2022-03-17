<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Formlogin extends Controller
{
    function testrequest(Request $req){
        return $req->input();
    }
}
