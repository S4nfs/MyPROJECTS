<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QueryBuilder extends Controller
{
    function operation()
    {
//========================================== CRUD OPERATIONS USING QUERY BUILDER==========================================
        //Read-----------------------------------------------------------
        $data =  DB::table('register')->get();
        return view('myquerybuilder',['data'=>$data]);

        //Create-----------------------------------------------------------
        //  return DB::table('register')->insert([
        //     'name'=>'blah',
        //     'password'=>'blahblah'
        // ]);

        //Update-----------------------------------------------------------
        // return DB::table('register')->where('id', 12)
        // ->update(['name' => 'up', 'password' => 'updatedpass']);

        //Delete-----------------------------------------------------------
        // return DB::table('register')->where('id', 2)->delete();


        

        // Interview Q: Insert the query if it didn't exists or simply update------------
        // return DB::table('register') 
        // ->updateOrInsert(['id'=>'2'],['name'=>'new', 'password'=>'newlyinsertedpass']);

        //Aggregate Methods(min,max,sum,avg)--------------------------------------------
        // return DB::table('register')->sum('id');
        // return DB::table('register')->min('id');
        //return DB::table('register')->select(DB::raw("min(id) as min_myData, max(id) as mix_myData"))->get(); //return multiple fields

    }
    
}
