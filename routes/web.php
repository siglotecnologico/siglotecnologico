<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Formularios\ContactoController;
use App\Http\Controllers\VisitController;
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

Route::get('portafolio/kipit', function(){
    return view('portafolio/kipit');
})->name('portafolio.kipit');

Route::get('portafolio/vicidial', function(){
    return view('portafolio/vicidial');
})->name('portafolio.vicidial');


Route::get('/visits', [VisitController::class, 'index']);
Route::post('/formularioContacto', [ContactoController::class, 'store'])->name('contacto.store');
Route::post('/formularioContactoinfo', [ContactoController::class, 'contactoinfo'])->name('contactoinfo.store');
Route::post('/formulariosuscripcion', [ContactoController::class, 'suscripcion'])->name('suscripcion.store');

