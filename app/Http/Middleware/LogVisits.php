<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogVisits
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Obtener la ruta del archivo
        $filePath = storage_path('app/visits.json');

        // Leer el contenido actual del archivo
        $visits = [];
        if (file_exists($filePath)) {
            $visits = json_decode(file_get_contents($filePath), true);
        }

        // Agregar la nueva visita
        $visits[] = [
            'ip_address' => $request->ip(),
            'url' => $request->fullUrl(),
            'visited_at' => now()->toDateTimeString(),
        ];

        // Guardar el contenido actualizado en el archivo
        file_put_contents($filePath, json_encode($visits, JSON_PRETTY_PRINT));

        return $next($request);
    }
}
