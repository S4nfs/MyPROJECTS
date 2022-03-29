<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DB2;
use App\Models\User;


class Clonedatabse extends Controller
{
    function list(){
//using only controller------------------------------------------------------------------------------
        // return DB::table('register')->get();                             //databse 1 
        // return DB::connection('mysql2')->table('registration')->get();   //database 2

//using model----------------------------------------------------------------------------------------
        return User::all();                                                 //databse 1 
        return DB2::all();                                                  //databse 2 
    }
}
