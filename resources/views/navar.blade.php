<!-- ====== start top navbar ====== -->
<div class="top-navbar style-1">
    <div class="container">
        <div class="content">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="top-links">
                        <div class="text text-white">
                            <i class="fas fa-bullhorn"></i>
                            <strong>¿No sabes como escalar tu Negocio? </strong>
                            <span>Descubre cómo podemos impulsar tu transformación digital <a href="{{ route('contactos') }}"
                                    class="p-0"><u>Contactanos</u></a></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="r-side">
                        <div class="socail-icons">
                            <a href="https://www.instagram.com/siglotecnologico/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>

                            <a href="https://github.com/siglotecnologico" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ====== end top navbar ====== -->

<nav class="navbar navbar-expand-lg navbar-light style-1">
    <div class="container">
        <a class="navbar-brand" href="{{ route('inicio') }}">
            <img src="{{ asset('assets/img/LOGOSIGLO180x54.png') }}" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {{-- <li class="nav-item dropdown">
                    <a class="nav-link" href="{{ route('inicio') }}">
                        Inicio
                    </a>
                </li> --}}
                <li class="nav-item dropdown">
                    <a class="nav-link active" data-scroll-nav="1">
                        Siglo Tecnológico
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a  href="{{ route('services') }}" class="nav-link" >
                        Servicios
                    </a>
                </li>
               {{--  <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="3">
                        Productos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-scroll-nav="6">
                        Noticias
                    </a>
                </li> --}}
            </ul>
            <div class="nav-side">
                <div class="hotline pe-4">
                    <div class="icon me-3">
                        <a href="tel:+59395520743"> <i class="bi bi-telephone"></i></a>
                    </div>
                    <div class="cont">
                        <small class="text-muted m-0">Soporte 24/7</small>
                        <a href="tel:+59395520743">
                            <h6>(+593)95520743</h6>
                        </a>
                    </div>
                </div>
                <div class="qoute-nav ps-4">
                    <a href="{{ route('contactos') }}" class="btn sm-butn butn-gard border-0 text-white" >
                        <span>Contactos</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
