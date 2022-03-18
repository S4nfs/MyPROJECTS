<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    function uploadER(Request $req){
return $req->file('doc')->store('img');
    }
}
