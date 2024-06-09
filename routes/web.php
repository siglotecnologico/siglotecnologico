<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Formularios\ContactoController;

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
Route::get('portafolio', function(){
    return view('portafolio');
})->name('portafolio');

Route::get('portafolio/damplus', function(){
    return view('portafolio/damplus');
})->name('portafolio.damplus');

Route::post('/formularioContacto', [ContactoController::class, 'store'])->name('contacto.store');
Route::post('/formularioContactoinfo', [ContactoController::class, 'contactoinfo'])->name('contactoinfo.store');
Route::post('/formulariosuscripcion', [ContactoController::class, 'suscripcion'])->name('suscripcion.store');

