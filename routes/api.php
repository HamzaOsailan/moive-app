<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get_product',[ProductController::class,'get_all_product']);
Route::post('/add_product',[ProductController::class,'add_product']);
Route::get('/get_product_id/{id}',[ProductController::class,'get_product_id']);
Route::put('/update_product/{id}',[ProductController::class,'update_product']);
Route::delete('/delete_product/{id}',[ProductController::class,'delete_product']);

//movie
Route::get('/movies', [MovieController::class, 'index']);
Route::get('/movies/{title}', [MovieController::class, 'findMoiveByName']);
Route::post('/movie', [MovieController::class, 'store']);
Route::put('/updateMovie/{title}', [MovieController::class, 'update']);
Route::delete('/deleteMovie/{title}', [MovieController::class, 'delete']);

//login the admin
Route::post('/register', [UserController::class, 'registerUser']);


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [UserController::class, 'login']);
    Route::post('logout', [UserController::class, 'logout']);
    Route::post('refresh', [UserController::class, 'refresh']);
    Route::post('me', [UserController::class, 'me']);
});

// Add this to routes/web.php or routes/api.php
// Add this to routes/web.php or routes/api.php

