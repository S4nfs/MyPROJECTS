<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class FormSubmit extends Controller
{
    function registerData(Request $req)
    {
        $user = new User;
        $user->name = $req->name;   //key should be table field
        $user->password = $req->password;
        $user->save(); 

        return $req->input();
        
    }
}
