<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class VisitController extends Controller
{
    public function index()
    {
        $filePath = storage_path('app/visits.json');
        
        $visits = [];
        if (file_exists($filePath)) {
            $visits = json_decode(file_get_contents($filePath), true);
        }

        // Filtrar visitas indeseadas y agregar datos adicionales
        $filteredVisits = [];
        foreach ($visits as $visit) {
            $filteredVisit = [
                'ip_address' => $visit['ip_address'],
                'url' => $visit['url'],
                'visited_at' => $visit['visited_at'],
                'user_agent' => isset($visit['user_agent']) ? $visit['user_agent'] : 'Unknown',
                'http_method' => isset($visit['http_method']) ? $visit['http_method'] : 'Unknown',
                'status_code' => isset($visit['status_code']) ? $visit['status_code'] : 'Unknown',
                'referer' => isset($visit['referer']) ? $visit['referer'] : 'Unknown',
                'load_time' => isset($visit['load_time']) ? $visit['load_time'] : 'Unknown',
                'page_size' => isset($visit['page_size']) ? $visit['page_size'] : 'Unknown',
                'geolocation' => isset($visit['geolocation']) ? $visit['geolocation'] : 'Unknown',
                // Agregar más datos adicionales aquí
            ];
            $filteredVisits[] = $filteredVisit;
        }
        $visitsCollection = collect($visits);
        return view('visits.index', ['visits' => $visitsCollection]);
    }
}
