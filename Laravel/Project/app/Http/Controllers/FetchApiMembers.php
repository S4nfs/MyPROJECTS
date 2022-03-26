<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FetchMembers;

class FetchApiMembers extends Controller
{
    //GET
    function list($id = null)
    {
        return $id?FetchMembers::find($id):FetchMembers::all(); //ternary if id not found return all
    }

    function list2(FetchMembers $key){
        return FetchMembers::find($key);
    }

    //POST
    function add(Request $req){
        $data = new FetchMembers;
        $data->name = $req->myname;
        $data->email = $req->myemail;
        $data->address = $req->myaddress;
        $result = $data->save();
        if($result){
            return ["result"=> "Confidential Data Inserted :)"];
        }else{
            return ["result"=> "Operation Failed :("];
        }
    }

    //PUT
    function put(Request $req){
        $data = FetchMembers::find($req->id);
        $data->name = $req->myname;
        $data->email = $req->myemail;
        $data->address = $req->myaddress;
        $result = $data->save();
        if($result){
            return ["result"=> "Confidential Data Updated :)"];
        }else{
            return ["result"=> "Operation Failed :("];
        }
    }

    //DELETE
    function del(Request $req){
        $data = FetchMembers::find($req->id);
        $result = $data->delete();
        if($result){
            return ["result"=> "Data Deleted :)"];
        }else{
            return ["result"=> "Operation Failed :("];
        }
    }
}

