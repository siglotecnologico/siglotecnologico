<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Metas -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="keywords" content="HTML5 Template Iteck Multi-Purpose themeforest" />
    <meta name="description" content="Iteck - Multi-Purpose HTML5 Template" />
    <meta name="author" content="" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/img/favicon-16x16.png') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <!-- Title  -->
    <title>SIGLO TECNOLOGICO</title>

    <!-- ====== bootstrap icons cdn ====== -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

    <!-- bootstrap 5 -->
    <link rel="stylesheet" href="{{ asset('assets/css/lib/bootstrap.min.css') }}">

    <!-- ====== font family ====== -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('assets/css/lib/all.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/lib/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/lib/jquery.fancybox.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/lib/lity.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/lib/swiper.min.css') }}" />
    <!-- ====== global style ====== -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('landing-preview/css/preview-style.css') }}" />
    <style>

        .item .technologies {
            margin-top: 20px;
        }
        
        .item .technologies h6 {
            font-size: 16px;
            font-weight: bold;
            color: #555;
            margin-bottom: 10px;
        }
        
        .item .technologies ul {
            list-style-type: none;
            padding: 0;
        }
        
        .item .technologies ul li {
            background: #f1f1f1;
            padding: 8px 12px;
            border-radius: 5px;
            margin-bottom: 5px;
            font-size: 14px;
            color: #333;
            display: inline-block;
            margin-right: 5px;
        }
        
        .item .technologies ul li::before {
            content: '•';
            color: #007BFF;
            margin-right: 5px;
        }
        </style>
</head>

<body>
    @include('navar')

    @yield('content')
    @include('footer')

    <!-- ====== request ====== -->
    <script src="{{ asset('assets/js/lib/jquery-3.0.0.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/jquery-migrate-3.0.0.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/wow.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/jquery.fancybox.js') }}"></script>
    <script src="{{ asset('assets/js/lib/lity.js') }}"></script>
    <script src="{{ asset('assets/js/lib/swiper.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('assets/js/lib/jquery.counterup.js') }}"></script>
    <!-- <script src="{{ asset('assets/js/lib/pace.js') }}"></script> -->
    <script src="{{ asset('landing-preview/js/parallax.min.js') }}"></script>
    <script src="{{ asset('landing-preview/js/countdown.js') }}"></script>
    <script src="{{ asset('assets/js/lib/scrollIt.min.js') }}"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
    <script src="{{ asset('landing-preview/js/demo.js') }}"></script>
</body>

</html>
