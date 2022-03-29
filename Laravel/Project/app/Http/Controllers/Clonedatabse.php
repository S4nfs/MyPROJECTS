<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Clonedatabse extends Controller
{
    function list(){
        // return DB::table('register')->get();  //databse 1 
        return DB::connection('mysql2')->table('registration')->get(); //database 2
    }
}
