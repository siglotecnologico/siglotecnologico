@extends('app')
@section('content')
    @include('header')
    <!-- ---------- loader ---------- -->
    <div id="preloader">
        <div id="loading-wrapper" class="show">
            <div id="loading-text"> <!-- <img src="assets/img/logo_loading.png" alt=""> --> SIGLO TECNOLOGICO</div>
            <div id="loading-content"></div>
        </div>
    </div>
    <!-- ====== end loading page ====== -->


    <!--Contents-->
    <main>


        <!-- ====== start about ====== -->
        <section class="about style-1" data-scroll-index="1">
            <div class="container">
                <div class="content">
                    <div
                        class="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">
                        {{--  <a href="#" class="logo wow fadeInUp" data-wow-delay="0">
                            <img src="{{ asset('images/cable-car.png') }}" hidden alt="">
                        </a><img src="assets/img/about/about_logos/1.png" alt="">
                        <a href="#" class="logo wow fadeInUp" data-wow-delay="0.2s">
                            <img src="assets/img/about/about_logos/2.png" alt="">
                        </a>
                        <a href="#" class="logo wow fadeInUp" data-wow-delay="0.4s">
                            <img src="assets/img/about/about_logos/3.png" alt="">
                        </a>
                        <a href="#" class="logo wow fadeInUp" data-wow-delay="0.6s">
                            <img src="assets/img/about/about_logos/4.png" alt="">
                        </a>
                        <a href="#" class="logo wow fadeInUp" data-wow-delay="0.8s">
                            <img src="assets/img/about/about_logos/5.png" alt="">
                        </a> --}}
                    </div>
                    <div class="about-info">
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="title">
                                    <h3 class="wow fadeInUp slow">"La tecnología es mejor cuando une a las personas."</h3>
                                    <small class="wow fadeInUp slow fw-bold">SIGLO TECNOLÓGICO</small>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="info">
                                    <h6 class="wow fadeInUp slow">Podemos ayudarte a mantener y modernizar tu
                                        infraestructura IT y resolver diversos problemas específicos de la misma.</h6>
                                    <p class="wow fadeInUp slow">SIGLO TECNOLÓGICO es el socio de elección para muchas de
                                        las principales empresas del mundo, pymes y desafiantes tecnológicos. Ayudamos a las
                                        empresas a elevar su valor a través del desarrollo de software personalizado, diseño
                                        de productos, control de calidad y servicios de consultoría.</p>
                                    <a href="{{ route('contactos') }}"
                                        class="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                                        <span>Contacta con nosotros</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-numbers">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="num-item wow fadeInUp" data-wow-delay="0">
                                    <div class="num">
                                        <span class="counter">5</span>
                                        <span><i class="fas fa-plus"></i></span>
                                    </div>
                                    <div class="inf">Años de Experiencia</div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="num-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="num">
                                        <span class="counter">15</span>
                                        <span> </span>
                                    </div>
                                    <div class="inf">Proyectos completados</div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div class="num-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div class="num">
                                        <span class="counter">20</span>
                                    </div>
                                    <div class="inf">Clientes satisfechos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="assets/img/about/num_shap.png" alt="" class="about_shap">
                </div>
            </div>
        </section>

        <!-- ====== end about ====== -->


        <!-- ====== start services ====== -->
        <section class="services section-padding style-1" data-scroll-index="2">
            <div class="container">
                <div class="row">
                    <div class="col offset-lg-1">
                        <div class="section-head mb-60">
                            <h6 class="color-main text-uppercase wow fadeInUp">Nuestros Servicios</h6>
                            <h2 class="wow fadeInUp">
                                Soluciones de IT Perfectas <span class="fw-normal">Para Tu Negocio</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="service-box mb-4 wow fadeInUp" data-wow-delay="0">
                                <h5>
                                    <a href="{{ route('services') }}">Desarrollo de Software</a>
                                    <span class="num">01</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/1.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Creamos soluciones personalizadas, eficientes y escalables que impulsan el
                                        crecimiento y la innovación en tu negocio.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-box mb-4 wow fadeInUp" data-wow-delay="0.2s">
                                <h5>
                                    <a href="{{ route('services') }}">Seguridad de Datos</a>
                                    <span class="num">02</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/2.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Protegemos tu información con soluciones avanzadas. Prevención, detección y
                                        respuesta ante amenazas cibernéticas.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-box mb-4 wow fadeInUp" data-wow-delay="0.4s">
                                <h5>
                                    <a href="{{ route('services') }}">Desarrollo de Sitios Web</a>
                                    <span class="num">03</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/3.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Diseñamos sitios web atractivos, enfocados en la usabilidad, velocidad
                                        y SEO para impulsar tu presencia en línea y conectar con tu audiencia.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-box mb-4 mb-md-0 wow fadeInUp" data-wow-delay="0">
                                <h5>
                                    <a href="{{ route('services') }}">Diseño UI/UX</a>
                                    <span class="num">04</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/4.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Creando experiencias visuales impactantes y funcionales. Desde la interfaz de
                                        usuario hasta la experiencia de usuario.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-box mb-4 mb-md-0 wow fadeInUp" data-wow-delay="0.2s">
                                <h5>
                                    <a href="{{ route('services') }}">Servicios en la Nube</a>
                                    <span class="num">05</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/5.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Eleva tu negocio a nuevas alturas con nuestras soluciones de servicios en la nube.
                                        Desde almacenamiento seguro hasta potentes herramientas de colaboración.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-box wow fadeInUp" data-wow-delay="0.4s">
                                <h5>
                                    <a href="{{ route('services') }}">Integraciones</a>
                                    <span class="num">06</span>
                                </h5>
                                <div class="icon">
                                    <img src="assets/img/icons/serv_icons/6.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="text">
                                        Conecta tus sistemas y optimiza tus operaciones. En Siglo Tecnológico, diseñamos
                                        integraciones eficientes que mejoran la conectividad y la productividad.
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="{{ route('services') }}" class="btn butn-gard border-0 text-white wow fadeInUp">
                    <span>Otros Servicios</span>
                </a>
            </div>

            <img src="assets/img/services/ser_shap_l.png" alt="" class="ser_shap_l">
            <img src="assets/img/services/ser_shap_r.png" alt="" class="ser_shap_r">
        </section>

        <!-- ====== end services ====== -->


        <!-- ====== start choose-us====== -->
        <section class="choose-us section-padding pt-0 style-1" data-scroll-index="3">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-5">
                        <div class="info">
                            <div class="section-head mb-60">
                                <h6 class="color-main text-uppercase wow fadeInUp">¿Por qué elegirnos?</h6>
                                <h2 class="wow fadeInUp">
                                    Impulsa Tu Negocio <span class="fw-normal">Con Nueva Tecnología</span>
                                </h2>
                            </div>
                            <div class="text">
                                Nuestro equipo puede ayudarte a transformar tu negocio a través de las últimas capacidades
                                tecnológicas para mantenerte a la vanguardia.
                            </div>
                            <ul>
                                <li class="wow fadeInUp">
                                    <span class="icon">
                                        <i class="bi bi-check2"></i>
                                    </span>
                                    <h6>
                                        Últimas Soluciones de IT e Integración con Blockchain
                                    </h6>
                                </li>
                                <li class="wow fadeInUp">
                                    <span class="icon">
                                        <i class="bi bi-check2"></i>
                                    </span>
                                    <h6>
                                        Soporte para más de 100 Pasarelas de Pago
                                    </h6>
                                </li>
                                <li class="wow fadeInUp">
                                    <span class="icon">
                                        <i class="bi bi-check2"></i>
                                    </span>
                                    <h6>
                                        Inteligencia Artificial (AI) y Aprendizaje Profundo (Deep Learning)
                                    </h6>
                                </li>
                                <li class="wow fadeInUp">
                                    <span class="icon">
                                        <i class="bi bi-check2"></i>
                                    </span>
                                    <h6>
                                        Soporte Dedicado 24/7
                                    </h6>
                                </li>
                            </ul>

                            <a href="#como-trabajamos" class="btn butn-gard border-0 text-white wow fadeInUp">
                                <span>Cómo Trabajamos</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/choose_us/choose_lines.svg" alt="" class="choose-us-img">
            <img src="assets/img/choose_us/choose_brands.png" alt="" class="choose-us-brands">
            <img src="assets/img/choose_us/choose_bubbles.png" alt="" class="choose-us-bubbles">
        </section>

        <!-- ====== end choose-us====== -->


        <!-- ====== start portfolio ====== -->


        <!-- ====== end portfolio ====== -->


        <!-- ====== start testimonials ====== -->
        <section class="testimonials section-padding style-1" data-scroll-index="5">
            <div class="container">
                <div class="section-head mb-60 text-center">
                    <h6 class="color-main text-uppercase wow fadeInUp">Testimonios</h6>
                    <h2 class="wow fadeInUp">
                        La Confianza <span class="fw-normal">de Nuestros Clientes</span>
                    </h2>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="vid_img mb-2 mb-md-0 wow zoomIn slow">
                                <img src="assets/img/testimonials/testi.jpeg" alt="">
                                <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity class="play_icon">
                                    <i class="bi bi-play"></i>
                                </a>
                                <div class="img_info wow fadeInUp">
                                    <h4><a href="#">Casper Defloy</a></h4>
                                    <small><a href="#">Líder Tecnológico en Esty Inc</a></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="info wow fadeInUp">
                                <div class="client_card mb-2" data-wow-delay="0">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user1.jpeg" alt="">
                                    </div>
                                    <div class="inf_content">
                                        <div class="rate_stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                        <h6>
                                            “Siglo Tecnologico proporciona soluciones de IT perfectas, un proceso rápido y
                                            un precio asequible. ¡Estamos realmente satisfechos!”
                                        </h6>
                                        <p>Ibrahima K. <span class="text-muted">/ Marketing Senior en Amazon</span></p>
                                    </div>
                                </div>
                                <div class="client_card mb-2" data-wow-delay="0.2s">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user2.jpeg" alt="">
                                    </div>
                                    <div class="inf_content">
                                        <div class="rate_stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                        <h6>
                                            “Siglo Tecnologico: mi primera opción para servicios en la nube”
                                        </h6>
                                        <p> Ben S. <span class="text-muted">/ CEO en ThemesCamp</span></p>
                                    </div>
                                </div>
                                <div class="client_card" data-wow-delay="0.4s">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user3.jpeg" alt="">
                                    </div>
                                    <div class="inf_content">
                                        <div class="rate_stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                        </div>
                                        <h6>
                                            “Nuestras ganancias aumentaron mucho. ¡Realmente impresionante!”
                                        </h6>
                                        <p>Alexander A. <span class="text-muted">/ Líder Tecnológico de Traveloka</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== end testimonials ====== -->

        <!-- ====== start team ====== -->


        <!-- ====== end team ====== -->

        <!-- ====== start blog ====== -->


        <!-- ====== end blog ====== -->


        <!-- ====== start contact ====== -->
        <section class="contact section-padding bg-gradient style-1" data-scroll-index="7">
            <div class="container">
                <div class="section-head mb-60 text-center">
                    <h6 class="text-white text-uppercase wow fadeInUp">contáctanos</h6>
                    <h2 class="wow fadeInUp text-white">
                        Solicita una <span class="fw-normal">Asesoría Gratuita</span>
                    </h2>
                </div>
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="contact_info text-white">
                                <p class="wow fadeInUp">Línea Directa 24/7</p>
                                <h4 class="wow fadeInUp">+593 988492339</h4>
                                <ul>
                                    <li class="wow fadeInUp">
                                        <strong>Dirección : </strong> Guayaquil-Ecuador
                                    </li>
                                    <li class="wow fadeInUp">
                                        <strong>Email : </strong> info@siglotecnologico.com
                                    </li>
                                    <li class="wow fadeInUp">
                                        <strong>Horario de Trabajo : </strong> Lun - Sáb: 9:00 - 18:00
                                    </li>
                                </ul>
                                <a href="{{ route('contactos') }}" class="wow fadeInUp">obtener
                                    dirección</a>
                            </div>
                        </div>

                        <div class="col-lg-6 offset-lg-1">
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
                            <form class="contact_form" action="{{ route('contacto.store') }}" method="post">
                                @csrf
                                <div class="row gx-3">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <input type="text" name="name" class="form-control"
                                                placeholder="Nombre *" value="{{ old('name') }}">
                                            @error('name')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3 ">
                                            <input type="email" name="email" class="form-control"
                                                placeholder="Dirección de correo electrónico *"
                                                value="{{ old('email') }}">
                                            @error('email')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3 ">
                                            <select name="option" class="form-select">
                                                <option value="" selected>Selecciona el motivo de tu consulta
                                                </option>
                                                <option value="consultoría">Consultoría en Transformación Digital</option>
                                                <option value="desarrollo">Desarrollo de Aplicaciones Empresariales
                                                </option>
                                                <option value="inteligencia">Inteligencia Artificial y Machine Learning
                                                </option>
                                                <option value="seguridad">Seguridad Informática y Ciberseguridad</option>
                                                <option value="cloud">Servicios en la Nube (Cloud Computing)</option>
                                                <option value="iot">Internet de las Cosas (IoT) y Dispositivos
                                                    Conectados</option>
                                                <option value="analisis">Análisis de Datos y Big Data</option>
                                            </select>
                                            @error('option')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <textarea class="form-control" name="message" rows="4" placeholder="Escribe tu consulta aquí">{{ old('message') }}</textarea>
                                            @error('message')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-check mb-4 ">
                                            <input class="form-check-input" type="checkbox" value="1"
                                                id="flexCheckDefault" name="terms">
                                            <label class="form-check-label text-light small" for="flexCheckDefault">
                                                Al enviar, acepto los <a href="#"
                                                    class="text-decoration-underline">Términos y Condiciones</a>
                                            </label>
                                            @error('terms')
                                                <div class="text-danger">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="submit" value="Solicitar Ahora"
                                            class="btn btn-dark  text-light fs-14px">
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/img/contact_globe.svg" alt="" class="contact_globe">
        </section>

        <!-- ====== end contact ====== -->
    </main>
    <!--End-Contents-->
@endsection
