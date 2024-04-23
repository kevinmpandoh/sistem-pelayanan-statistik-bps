<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\ChatController;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/pressrelease', function () {
    return Inertia::render('Pressrelease');
});

Route::get('/pressrelease/{id}/', function ($id) {
    $response = Http::get('https://webapi.bps.go.id/v1/api/view/domain/7100/model/pressrelease/lang/ind/id/' . $id . '/key/19c264519674b0e7b537944729138479/')->json();
    return Inertia::render('PressreleaseDetail', ['pressrelease' => $response['data']]);
})->name('pressrelease.detail');

Route::get('/publication', function () {
    return Inertia::render('Publication');
});

Route::get('/publication/{id}/', function ($id) {

    $response = Http::get('https://webapi.bps.go.id/v1/api/view/domain/7100/model/publication/lang/ind/id/' . $id . '/key/19c264519674b0e7b537944729138479/')->json();
    return Inertia::render('PublicationDetail', ['publication' => $response['data']]);
})->name('publication.detail');

Route::get('/infographic', function () {
    return Inertia::render('Infographic');
});

Route::get('/news', function () {
    return Inertia::render('News');
});

Route::get('/news/{id}/', function ($id) {
    $response = Http::get("https://webapi.bps.go.id/v1/api/view/domain/7100/model/news/lang/ind/id/" . $id . "/key/19c264519674b0e7b537944729138479/")->json();
    return Inertia::render("NewsDetail", ['news' => $response['data']]);
});

Route::get('/auth/login', [AuthController::class, 'index'])->name('login')->middleware('guest');
Route::post('/auth/login', [AuthController::class, 'authenticate']);
Route::get('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/register', [AuthController::class, 'store']);

Route::middleware(['auth'])->group(function () {
    Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');
    Route::get('/chat/{conversation}', [ChatController::class, 'show'])->name('chat.show');
    Route::post('/chat/{conversation}/send', [ChatController::class, 'sendMessage'])->name('chat.send');

    Route::post('/auth/logout', [AuthController::class, 'logout']);
});
