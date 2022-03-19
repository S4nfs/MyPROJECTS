<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorldWideConnection extends Controller
{
    function dataq(){
        return DB::select("select * from users");
    }
}
