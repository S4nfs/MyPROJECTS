<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class KroConnect extends Controller
{
    function getDatabase()
    {
        return User::all();
    }
}
