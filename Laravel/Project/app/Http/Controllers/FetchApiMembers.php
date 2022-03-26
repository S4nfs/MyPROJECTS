<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FetchMembers;

class FetchApiMembers extends Controller
{
    function list($id = null)
    {
        return $id?FetchMembers::find($id):FetchMembers::all(); //ternary if id not found return all
    }

    function list2(FetchMembers $key){
        return FetchMembers::find($key);
    }
}
