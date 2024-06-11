<!DOCTYPE html>
<html>
<head>
    <title>Visitas</title>
</head>
<body>
    <h1>Visitas</h1>
    <table>
        <thead>
            <tr>
                <th>IP Address</th>
                <th>URL</th>
                <th>Visited At</th>
            </tr>
        </thead>
        <tbody>
            @foreach($visits as $visit)
            <tr>
                <td>{{ $visit['ip_address'] }}</td>
                <td>{{ $visit['url'] }}</td>
                <td>{{ $visit['visited_at'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
