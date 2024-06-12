<!DOCTYPE html>

<html lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Tables - Basic Tables | Vuexy - Bootstrap Admin Template</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/img/favicon/favicon.ico') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
        rel="stylesheet" />

    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/fonts/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/fonts/tabler-icons.css') }}" />
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/fonts/flag-icons.css') }}" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/css/rtl/core.css') }}" />
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/css/rtl/theme-default.css') }}" />
    <link rel="stylesheet" href="{{ asset('administrativo/assets/css/demo.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/libs/node-waves/node-waves.css') }}" />
    <link rel="stylesheet"
        href="{{ asset('administrativo/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ asset('administrativo/assets/vendor/libs/typeahead-js/typeahead.css') }}" />

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="{{ asset('administrativo/assets/vendor/js/helpers.js') }}"></script>
    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
    <script src="{{ asset('administrativo/assets/vendor/js/template-customizer.js') }}"></script>
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
    <script src="{{ asset('administrativo/assets/js/config.js') }}"></script>
    <style>
        .pagination-container {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .pagination {
            display: flex;
            list-style: none;
        }

        .pagination>li {
            margin: 0 5px;
        }

        .pagination>li>a {
            padding: 5px 10px;
            border: 1px solid #ccc;
            color: #333;
            text-decoration: none;
        }

        .pagination>li>a:hover {
            background-color: #f0f0f0;
        }

        .pagination>.active>a {
            background-color: #007bff;
            color: #fff;
            border-color: #007bff;
        }
    </style>
</head>

<body>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div class="layout-container">
            <!-- Navbar -->
            <!-- Layout container -->
            <div class="layout-page">
                <!-- Content wrapper -->
                <div class="content-wrapper">
                    @yield('content')

                    <!-- Content -->

                    <!--/ Content wrapper -->
                </div>

                <!--/ Layout container -->
            </div>
        </div>
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>

    <!--/ Layout wrapper -->

    <!-- Core JS -->
    <!-- build:js administrativo/assets/vendor/js/core.js -->

    <script src="{{ asset('administrativo/assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/node-waves/node-waves.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/hammer/hammer.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/i18n/i18n.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    <script src="{{ asset('administrativo/assets/vendor/js/menu.js') }}"></script>

    <!-- endbuild -->

    <!-- Vendors JS -->

    <!-- Main JS -->
    <script src="{{ asset('administrativo/assets/js/main.js') }}"></script>

    <!-- Page JS -->
</body>

</html>
