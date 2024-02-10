<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function() {
    return view('index');
})->where('any', '.*')->name('inicio');

Route::get('services', function(){
    return view('services');
})->name('services');
Route::get('contactos', function(){
    return view('contactos');
})->name('contactos');
