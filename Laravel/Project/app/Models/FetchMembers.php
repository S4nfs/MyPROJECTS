<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FetchMembers extends Model
{
    use HasFactory;
    public $table="Members";
    public $timestamps=false;
}
