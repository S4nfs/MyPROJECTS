<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class Crud extends Controller
{
    //CREATE-----------------------------------------------------
    function registerData(Request $req)
    {
        $user = new User;
        $user->name = $req->name;   //key should be table field
        $user->password = $req->password;
        $user->save();
        return $req->input();
    }

    //READ--------------------------------------------------------
    public function getUser()
    {
        $data = User::paginate(5);
        return view('myuser', ['getmyusers' => $data]);
    }

    //UPDATE-----------------------------------------------------
    function showWhatToUpdate($id)
    {
        // return User::find($id);
        $editdata = User::find($id);
        return view('edit', ['thedata' => $editdata]);
    }
    function updateData(Request $req)
    {
        $updateFromId = User::find($req->id);
        $updateFromId->name = $req->name;
        $updateFromId->password = $req->password;
        $updateFromId->save();
        return redirect('myuser');
    }
    
    //DELETE-----------------------------------------------------
    function deleteUser($id)
    {
        $todelete = User::find($id);
        $todelete->delete();
        return redirect('myuser');
    }
}
