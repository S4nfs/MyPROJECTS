<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MyfetchedData extends Controller
{
    function fdata()
    {
        $data = Http::get("https://reqres.in/api/users?page=2");
        return view('fetch', ['collection' => $data['data']]);
    }
}
