<?php

use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/messages", [ChatController::class, "index"]);
Route::get("/messages/{id}", [ChatController::class, "show"]);
Route::post("messages", [ChatController::class, "store"]);
