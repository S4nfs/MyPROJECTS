<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class GetUser extends Controller
{
    public function getUser(){
        $data = User::paginate(5);
        return view('myuser', ['getmyusers'=>$data]);
    }
}
