<footer class="style-1">
    <div class="container">
        <div class="content">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="foot_info">
                        <a href="#" class="logo mb-3">
                            <img src="{{ asset('images/logoInstagram110x110.png') }}" alt="">
                        </a>
                        <div class="text mb-4">
                            Las Mejores Soluciones de TI y Tema de Tecnología
                        </div>
                        <ul class="mb-4">
                            <li class="d-flex">
                                <i class="bi bi-house me-3"></i>
                                <a href="#">
                                    <span>Ecuador</span>
                                </a>
                            </li>
                            <li class="d-flex">
                                <i class="bi bi-envelope me-3"></i>
                                <a href="#">
                                    <span>info@siglotecnologico.com</span>
                                </a>
                            </li>
                            <li class="d-flex">
                                <i class="bi bi-phone me-3"></i>
                                <a href="https://api.whatsapp.com/send?phone=593959520743&text=%C2%A1Hola!,%20Estoy%20Interesados%20en%20uno%20de%20sus%20servicios."
                                    target="_blank">
                                    <span>+593 95520743</span>
                                </a>
                            </li>
                        </ul>
                        <div class="social_icons">
                            <a href="https://www.instagram.com/siglotecnologico/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            {{--   <a href="#" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a> --}}
                            <a href="https://api.whatsapp.com/send?phone=593959520743&text=%C2%A1Hola!,%20Estoy%20Interesados%20en%20uno%20de%20sus%20servicios."
                                target="_blank">
                                <img src="{{ asset('icon/whatsapp.svg') }}" alt="">
                            </a>
                            <a href="https://github.com/siglotecnologico" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="links">
                        <div class="cont">
                            <h6 class="link_title">
                                Servicios
                            </h6>
                            <ul>
                                <li>
                                    <a href="{{ route('services') }}">CRM y Software </a>
                                </li>
                                <li>
                                    <a href="{{ route('services') }}">Desarrollo de Sitios Web </a>
                                </li>
                                <li>
                                    <a href="{{ route('services') }}">Seguridad de Datos </a>
                                </li>
                                <li>
                                    <a href="{{ route('services') }}">Consultas de TI </a>
                                </li>
                                <li>
                                    <a href="{{ route('services') }}">Diseño UI/UX </a>
                                </li>
                                <li>
                                    <a href="{{ route('services') }}">Servicios en la Nube </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="links">
                        <div class="cont">
                            <h6 class="link_title">
                                Información
                            </h6>
                            <ul>
                                <li>
                                    <a href="{{ route('portafolio') }}">Portafolio</a>
                                </li>

                             
                                <li>
                                    <a href="{{ route('contactos') }}">Contactos </a>
                                </li> 

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="foot_subscribe">
                        <h6 class="link_title">Boletín</h6>
                        <p>Regístrate ahora para recibir las últimas actualizaciones sobre promociones y cupones.</p>
                        <form action="{{ route('suscripcion.store') }}" method="post">
                            @csrf
                            <div class="input-group my-4">
                                <input type="email" name="email" class="form-control" placeholder="Ingresa tu correo electrónico"
                                    aria-label="Ingresa tu correo electrónico" aria-describedby="button-addon2" required>
                                <button class="btn butn-gard border-0 text-white px-3" type="submit" id="button-addon2">
                                    <span>Suscribirse</span>
                                </button>
                            </div>
                        </form>
                        <p class="fst-italic">Al suscribirte, aceptas nuestras <a href="#" class="text-decoration-underline">Políticas</a></p>
                    </div>
                </div>
                @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
    
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <div class="foot">
                    <p>
                        © 2022 Derechos de autor por Siglo Tecnologico

                    </p>
                </div>
            </div>
        </div>
    </div>
    <img src="assets/img/footer/foot_l.png" alt="" class="foot_l">
    <img src="assets/img/footer/foot_r.png" alt="" class="foot_r">
</footer>


<!-- ====== start to top button ====== -->
<a href="#" class="to_top">
    <i class="bi bi-chevron-up"></i>
    <small>top</small>
</a>
<!-- ====== end to top button ====== -->
