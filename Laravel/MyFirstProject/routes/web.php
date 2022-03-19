<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\CustomController;
use App\Http\Controllers\FormSubmit;
use App\Http\Controllers\KroConnect;
use App\Http\Controllers\WorldWideConnection;
use App\Http\Controllers\MyfetchedData;
use App\Http\Controllers\Formlogin;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\GetUser;
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

//---------------------------------------------------------------------------------------------------------------
Route::view('about', 'about');  //with header component
Route::get('custom', [CustomController::class, 'loadview']); //custom.blade

// MIDDLEWARE-----------------------------------------------------------------------------------------------------
Route::view('noaccess', 'noaccess'); //goup middleware
Route::group(['middleware' => ['protectPage']], function () { //middleware ageCheck
    Route::view('access', 'access');
});
Route::view('access1', 'access1')->middleware('ageCheckerRoute'); //route middleware

// DATABASE-------------------------------------------------------------------------------------------------------
Route::get('createconnection', [WorldWideConnection::class, 'dataq']); //database connection with class
Route::get('/connect', [KroConnect::class, 'getDatabase']); //database connection with model

//HTTP Client-----------------------------------------------------------------------------------------------------
Route::get('fetch', [MyfetchedData::class, 'fdata']); //fetch apis

//HTTP methods-----------------------------------------------------------------------------------------------------
Route::post('formlogin', [Formlogin::class, 'testrequest']); //post form data

Route::get('/employeelogin', function () {
    if (session()->has('usersession')) {
        return redirect('profile');
    }
    return redirect('employeelogin');
});
Route::view('/profile', 'profile');

Route::view('employeelogin', 'employeelogin');

Route::get('/logout', function () {
    if (session()->has('usersession')) {
        session()->pull('usersession', null);
    }
    return redirect('employeelogin');
});


//File Upload-----------------------------------------------------------------------------------------------------
Route::view('upload', 'upload');
Route::post('uploadFile', [UploadController::class, 'uploadER']);

//Language-------------------------------------------------------------------------------------------------------
Route::get('/lang/{lang}', function ($language){
    App::setlocale($language);
    return view('lang');
});

// CRUD-----------------------------------------------------------------------------------------------------------
Route::view('login', 'submit'); //form view
Route::post('add', [FormSubmit::class, 'registerData']); //form post
Route::get('myuser', [GetUser::class, 'GetUser']);// list Users