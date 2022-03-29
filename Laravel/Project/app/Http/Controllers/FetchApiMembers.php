<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FetchMembers;
use Illuminate\Auth\Events\Validated;
use Validator;

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
            return ["message"=> "Confidential Data Inserted :)"];
        }else{
            return ["message"=> "Operation Failed :("];
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
            return ["message"=> "Confidential Data Updated :)"];
        }else{
            return ["message"=> "Operation Failed :("];
        }
    }

    //DELETE
    function del(Request $req){
        $data = FetchMembers::find($req->id);
        $result = $data->delete();
        if($result){
            return ["message"=> "Data Deleted :)"];
        }else{
            return ["message"=> "Operation Failed :("];
        }
    }

    //Search
    function ser($name){
        $result = FetchMembers::where("name","like", "%".$name."%")->get();
        if(count($result) > 0){
            return $result;
        }else{
            return ["message"=> "Search result not found !!"];
        }
    }

    //Validation
    function validation(Request $req){
        $rules = array(
            "myname" => "required | min:4" ,
            "myemail" => "required",
            "myaddress" => "required"

        );
        $myValidator = Validator::make($req->all(),$rules);
        if($myValidator->fails()){
            return response()->json($myValidator->errors(), 401);
        }else{
            $data = new FetchMembers;
            $data->name = $req->myname;
            $data->email = $req->myemail;
            $data->address = $req->myaddress;
            $result = $data->save();
            if($result){
                return ["message" => "validated"];
            }
        }   
    }

    //File Upload
    function uploader(Request $req){
        return $req->file('doc')->store('apiDocs');
    }
}

