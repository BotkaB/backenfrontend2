<?php

use App\Http\Controllers\SzemelynytController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('szemelynyts', [SzemelynytController::class,'index']);
Route::get('szemelynyts/{id}', [SzemelynytController::class,'show']);
Route::post('szemelynyts', [SzemelynytController::class,'store']);
Route::put('szemelynyts/{id}', [SzemelynytController::class, 'update']);
Route::delete('szemelynyts/{id}', [SzemelynytController::class,'destroy']);
