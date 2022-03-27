<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DummyAPI;
use App\Http\Controllers\FetchApiMembers;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//🍎 API Operation GET, POST, PUT, DELETE
Route::get('/get',[DummyAPI::class, 'getData']);
Route::get('/getmembers/{id?}', [FetchApiMembers::class, 'list']); //get data from members databse unique id
Route::get('/getwithname/{key:name}', [FetchApiMembers::class, 'list2']); //get data through unique name
Route::post('/addmembers', [FetchApiMembers::class, 'add']); //post
Route::put('/putmembers/{id}', [FetchApiMembers::class, 'put']); //put
Route::delete('/deletemembers/{id}', [FetchApiMembers::class, 'del']); //delete
Route::get('/search/{name}', [FetchApiMembers::class, 'ser']); //search
Route::post('/val', [FetchApiMembers::class, 'validation']);
