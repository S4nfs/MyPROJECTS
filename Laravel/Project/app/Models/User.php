<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class User extends Model
{
    use HasFactory,HasApiTokens;
    public $table="register";   //define if DB name is not registers
    public $timestamps = false;

}
