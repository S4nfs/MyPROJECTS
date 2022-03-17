<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Formlogin extends Controller
{
    function testrequest(Request $req){
        $data =  $req->input('name'); //getting input value
        $req->session()->put('usersession', $data); //store session
        return redirect('profile');
    }
}
