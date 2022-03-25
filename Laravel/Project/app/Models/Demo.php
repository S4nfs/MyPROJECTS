<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    use HasFactory;

    public $table = "Users";
    public $timestamps = false;


    //this is Accessor, Accessors are used to format the attributes after you retrieve them from database. Ex.here we are getting users name and uppercase the first letter before showing to client
    function getNameAttribute($value){
        return ucfirst($value);
    }


    //Mutator, Mutators are used to format the attributes before you save them to database.
    function setNameAttribute($value){
        if(strpos($value, "Mr.") !== false){
            return $this->attributes['name']= $value;
        }else{
    	    return $this->attributes['name'] = "Mr. ".$value;
        }
    }

    function setAddressAttribute($value){
        return $this->attributes['address']= $value." ,INDIA";
    }
}
