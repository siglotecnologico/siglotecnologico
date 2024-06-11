<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 

class VisitController extends Controller
{
    public function index()
    {
        $filePath = storage_path('app/visits.json');
        
        $visits = [];
        if (file_exists($filePath)) {
            $visits = json_decode(file_get_contents($filePath), true);
        }

        return view('visits.index', compact('visits'));
    }
}
