<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class Sanctuez extends Controller
{
    public function securewithsanctum(Request $req){
        $data = User::where('email', $req->myemail)->first();
        if(!$data || !Hash::check($req->mypassword, $data->password)){
            return response(['message' => ['These Credentials do not match with our records']], 404);
        }
        $token = $data->createToken('myverysecretkey')->plainTextToken;
        
        $result = [
            'data' => $data,
            'token' => $token
        ];
        return response($result, 200);
    }
}
