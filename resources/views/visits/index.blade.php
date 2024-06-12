@extends('visits.administrador')

@section('content')
<div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="py-3 mb-4"><span class="text-muted fw-light"><a href="{{ route('inicio') }}" target="_blank" rel="noopener noreferrer">Siglo Tecnologico</a>  /</span>Log de visitas</h4>
    <div class="card">
        <h5 class="card-header">Log de visitas</h5>
        <div class="card-body">
            <p>Total de Visitas: {{ count($visits) }}</p>
            <p>Visitas del Día: {{ count($visits->where('visited_at', '>=', now()->startOfDay())) }}</p>
            <p>Visitas del Mes: {{ count($visits->where('visited_at', '>=', now()->startOfMonth())) }}</p>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead>
                    <tr>
                        <th>IP Address</th>
                        <th>URL</th>
                        <th>Visited At</th>
                        <th>User Agent</th>
                        <th>HTTP Method</th>
                        <th>Status Code</th>
                        <th>Referer</th>
                        <th>Load Time</th>
                        <th>Page Size</th>
                        <th>Geolocation</th>
                        <!-- Agregar más columnas para datos adicionales aquí -->
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    @foreach ($visits as $visit)
                        <tr>
                            <td>{{ $visit['ip_address'] }}</td>
                            <td>{{ $visit['url'] }}</td>
                            <td>{{ $visit['visited_at'] }}</td>
                            <td>{{ isset($visit['user_agent']) ? $visit['user_agent'] : 'N/A' }}</td>
                            <td>{{ isset($visit['http_method']) ? $visit['http_method'] : 'N/A' }}</td>

                            <td>{{ isset($visit['status_code']) ? $visit['status_code'] : 'N/A' }}</td>
                            <td>{{ isset($visit['referer']) ? $visit['referer'] : 'N/A' }}</td>
                            <td>{{ isset($visit['load_time']) ? $visit['load_time'] : 'N/A' }}</td>
                            <td>{{ isset($visit['page_size']) ? $visit['page_size'] : 'N/A' }}</td>
                            <td>{{ isset($visit['geolocation']) ? $visit['geolocation'] : 'N/A' }}</td>
   
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
