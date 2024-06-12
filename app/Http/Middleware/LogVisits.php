<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class LogVisits
{
    public function handle(Request $request, Closure $next)
    {
        // Cargar lista de IPs sospechosas desde un archivo JSON
        $suspiciousIpsFile = storage_path('app/suspicious_ips.json');
        $suspiciousIps = [];
        if (file_exists($suspiciousIpsFile)) {
            $suspiciousIps = json_decode(file_get_contents($suspiciousIpsFile), true);
        }

        // Obtener la IP del visitante
        $ipAddress = $request->ip();

        // Verificar si la IP está en la lista de IPs sospechosas
        if (in_array($ipAddress, $suspiciousIps)) {
            Log::warning('IP sospechosa detectada y bloqueada', ['ip_address' => $ipAddress, 'url' => $request->fullUrl()]);
            abort(403, 'Acceso denegado.');
        }

        // Capturar datos adicionales de la visita
        $userAgent = $request->header('User-Agent');
        $httpMethod = $request->method();
        $statusCode = http_response_code();
        $referer = $request->headers->get('referer');
        $loadTime = // Calcular tiempo de carga de la página
        $pageSize = // Calcular tamaño de la página
        $geolocation = // Obtener geolocalización del visitante

        // Obtener la ruta del archivo
        $filePath = storage_path('app/visits.json');

        // Leer el contenido actual del archivo
        $visits = [];
        if (file_exists($filePath)) {
            $visits = json_decode(file_get_contents($filePath), true);
        }

        // Agregar la nueva visita con datos adicionales
        $newVisit = [
            'ip_address' => $ipAddress,
            'url' => $request->fullUrl(),
            'visited_at' => now()->toDateTimeString(),
            'user_agent' => $userAgent,
            'http_method' => $httpMethod,
            'status_code' => $statusCode,
            'referer' => $referer,
            'load_time' => $loadTime,
            'page_size' => $pageSize,
            'geolocation' => $geolocation,
            // Agregar más datos adicionales aquí
        ];

        $visits[] = $newVisit;

        // Guardar el contenido actualizado en el archivo
        file_put_contents($filePath, json_encode($visits, JSON_PRETTY_PRINT));

        return $next($request);
    }
}
