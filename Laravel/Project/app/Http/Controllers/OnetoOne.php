<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class OnetoOne extends Controller
{
    //One to One relationship: Just Like join method but it show the related data only
    function onetoone(){
        return Member::find(2)->companyData;
    }

    function onetomany(){
    }
}
