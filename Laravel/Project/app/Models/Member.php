<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    function companyData(){
    //    return $this->hasOne('App\Models\Company');
       return $this->hasMany('App\Models\Device');
    }
}
