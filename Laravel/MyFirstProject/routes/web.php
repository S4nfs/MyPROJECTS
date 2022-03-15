<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\CustomController;
use App\Http\Controllers\FormSubmit;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//3 methods to route:
Route::get('/', function () {                                       //[1]using function
    return view('welcome');
});
Route::get('users/{customer}', [Usercontroller::class, 'show']);    //[2]from controller [must import above]
// Route::view("url", "file");                                      //[3]from view


Route::view('about', 'about');  //with header component
Route::get('custom', [CustomController::class, 'loadview']); //custom.blade
Route::view('login', 'submit'); //form view
Route::post('submit', [FormSubmit::class, 'getData']); //form post

Route::view('noaccess', 'noaccess'); //middleware ageCheck
Route::group(['middleware' => ['protectPage']],function(){ //middleware ageCheck group
    Route::view('access', 'access');
});
