@extends('app')
@section('content')
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
                        <a href="#" class="logo wow fadeInUp" data-wow-delay="0">
                            <img src="assets/img/about/about_logos/1.png" alt="">
                        </a>
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
                        </a>
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
                                    <a href="#contacto" class="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
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
                            <!-- <div class="col-lg-3 col-sm-6">
                                                                                                                    <div class="num-item wow fadeInUp" data-wow-delay="0.4s">
                                                                                                                        <div class="num">
                                                                                                                            <span class="counter">240</span>
                                                                                                                        </div>
                                                                                                                        <div class="inf">Premios obtenidos</div>
                                                                                                                    </div>
                                                                                                                </div> -->
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
                                    <a href="#">Desarrollo de Software</a>
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
                                    <a href="#">Seguridad de Datos</a>
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
                                    <a href="#">Desarrollo de Sitios Web</a>
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
                                    <a href="#">Diseño UI/UX</a>
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
                                    <a href="#">Servicios en la Nube</a>
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
                                    <a href="#">Integraciones</a>
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
        <section class="portfolio section-padding bg-gray style-1" data-scroll-index="4">
            <div class="container">
                <div class="row">
                    <div class="col offset-lg-1">
                        <div class="section-head mb-60">
                            <h6 class="color-main text-uppercase wow fadeInUp">Portafolio</h6>
                            <h2 class="wow fadeInUp">
                                Últimos Proyectos <span class="fw-normal">De Nuestro Equipo</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="content wow fadeIn slow">
                    <div class="portfolio-slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="portfolio-card">
                                        <div class="img">
                                            <img src="assets/img/projects/prog/1.jpeg" alt="">
                                        </div>
                                        <div class="info">
                                            <h5>
                                                <a href="#">Actualización de Infraestructura</a>
                                            </h5>
                                            <small class="d-block color-main text-uppercase"><a href="#">Consultoría
                                                    de IT</a></small>
                                            <div class="text">
                                                Confía en nuestros expertos para eliminar los puntos dolorosos en tu flujo
                                                de trabajo e implementar nuevas tecnologías y aplicaciones.
                                            </div>
                                            <div class="tags">
                                                <a href="#">Consultoría</a>
                                                <a href="#">Gestión</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="portfolio-card">
                                        <div class="img">
                                            <img src="assets/img/projects/prog/2.png" alt="">
                                        </div>
                                        <div class="info">
                                            <h5>
                                                <a href="#">Página de Aterrizaje Criftocy</a>
                                            </h5>
                                            <small class="d-block color-main text-uppercase"><a href="#">Desarrollo
                                                    de Sitios Web,</a> <a href="#">Diseño UI/UX</a></small>
                                            <div class "text">
                                                Confía en nuestros expertos para eliminar los puntos dolorosos en tu flujo
                                                de trabajo e implementar nuevas tecnologías y aplicaciones.
                                            </div>
                                            <div class="tags">
                                                <a href="#">WordPress</a>
                                                <a href="#">PHP</a>
                                                <a href="#">HTML/CSS</a>
                                                <a href="#">Figma</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <!-- Repite este bloque para cada proyecto -->
                                </div>
                            </div>
                        </div>

                        <!-- ====== Paginación del slider ====== -->
                        <div class="swiper-pagination"></div>

                        <!-- ====== Navegación del slider ====== -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            <img src="assets/img/projects/prog/shap_r.png" alt="" class="shap_r">
            <img src="assets/img/projects/prog/shap_l.png" alt="" class="shap_l">
        </section>

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
        <section class="team section-padding pt-0 style-1">
            <div class="container">
                <div class="section-head mb-60 text-center">
                    <h6 class="color-main text-uppercase wow fadeInUp">Conoce a nuestros expertos</h6>
                    <h2 class="wow fadeInUp">
                        Satisfacción del Cliente, <span class="fw-normal">Nuestra Reputación</span>
                    </h2>
                </div>
                <div class="content">
                    <div class="team_box wow fadeInUp" data-wow-delay="0">
                        <div class="avatar">
                            <img src="assets/img/team/1.jpeg" alt="">
                        </div>
                        <div class="info">
                            <h6><a href="#">Michael Edwards</a></h6>
                            <small>CEO Fundador</small>
                            <div class="social_icons">
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team_box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="avatar">
                            <img src="assets/img/team/2.jpeg" alt="">
                        </div>
                        <div class="info">
                            <h6><a href="#">Bobby Kane</a></h6>
                            <small>CTO</small>
                            <div class="social_icons">
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team_box wow fadeInUp" data-wow-delay="0.4s">
                        <div class="avatar">
                            <img src="assets/img/team/3.jpeg" alt="">
                        </div>
                        <div class="info">
                            <h6><a href="#">Robert Downey Jr</a></h6>
                            <small>Gerente de Proyecto</small>
                            <div class="social_icons">
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team_box wow fadeInUp" data-wow-delay="0.6s">
                        <div class="avatar">
                            <img src="assets/img/team/4.jpeg" alt="">
                        </div>
                        <div class="info">
                            <h6><a href="#">Andrew Robertson</a></h6>
                            <small>Líder de Marketing</small>
                            <div class="social_icons">
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="team_box wow fadeInUp" data-wow-delay="0.8s">
                        <div class="avatar">
                            <img src="assets/img/team/5.jpeg" alt="">
                        </div>
                        <div class="info">
                            <h6><a href="#">Alexander Avery</a></h6>
                            <small>Director Creativo</small>
                            <div class="social_icons">
                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bttns mt-4 text-center">
                    <a href="page-about-5.html" class="btn btn-dark wow zoomIn">
                        <span>Ver Todo el Equipo</span>
                    </a>
                    <a href="page-contact-5.html" class="btn butn-gard border-0 text-white wow zoomIn">
                        <span>Únete a Nuestro Equipo</span>
                    </a>
                </div>
            </div>
            <img src="assets/img/team/team_shap.png" alt="" class="team_shap">
        </section>

        <!-- ====== end team ====== -->

        <!-- ====== start blog ====== -->
        <section class="blog section-padding bg-gray style-1" data-scroll-index="6">
            <div class="container">
                <div class="row">
                    <div class="col offset-lg-1">
                        <div class="section-head mb-60">
                            <h6 class="color-main text-uppercase wow fadeInUp">nuestra prensa</h6>
                            <h2 class="wow fadeInUp">
                                Últimas Publicaciones <span class="fw-normal">De Nuestra Prensa</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="blog_slider">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="blog_box">
                                        <div class="tags">
                                            <a href="#">noticias</a>
                                        </div>
                                        <div class="img">
                                            <img src="assets/img/blog/1.jpeg" alt="">
                                        </div>
                                        <div class="info">
                                            <h6><a href="page-single-post-5.html">Tendencias Cripto 2023</a></h6>
                                            <div class="auther">
                                                <span>
                                                    <img class="auther-img" src="assets/img/testimonials/user1.jpeg"
                                                        alt="">
                                                    <small><a href="#">Por Admin</a></small>
                                                </span>
                                                <span>
                                                    <i class="bi bi-calendar2"></i>
                                                    <small><a href="#">15 de mayo de 2022</a></small>
                                                </span>
                                            </div>
                                            <div class="text">
                                                Si hay una forma en que la tecnología inalámbrica ha cambiado la forma en
                                                que trabajamos, es que ahora todos están conectados [...]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Repite los bloques para cada entrada del blog -->
                                <!-- ... -->
                            </div>
                        </div>
                        <!-- ====== Navegación del slider ====== -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>

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
                                        <strong>Dirección : </strong> 58 Howard Street, San Francisco, CA 941
                                    </li>
                                    <li class="wow fadeInUp">
                                        <strong>Email : </strong> contact@siglotecnologico.com
                                    </li>
                                    <li class="wow fadeInUp">
                                        <strong>Fax : </strong> fax@siglotecnologico.com
                                    </li>
                                    <li class="wow fadeInUp">
                                        <strong>Horario de Trabajo : </strong> Lun - Sáb: 9:00 - 18:00
                                    </li>
                                </ul>
                                <a href="#" class="wow fadeInUp">obtener dirección</a>
                            </div>
                        </div>
                        <div class="col-lg-6 offset-lg-1">
                            <form class="contact_form" action="contact.php" method="post">
                                <div class="row gx-3">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3 wow fadeInUp">
                                            <input type="text" name="name" class="form-control"
                                                placeholder="Nombre *">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3 wow fadeInUp">
                                            <input type="text" name="email" class="form-control"
                                                placeholder="Dirección de correo electrónico *">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3 wow fadeInUp">
                                            <select name="option" class="form-select"
                                                aria-label="Default select example">
                                                <option selected>Su consulta sobre</option>
                                                <option value="1">Uno</option>
                                                <option value="2">Dos</option>
                                                <option value="3">Tres</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3 wow fadeInUp">
                                            <textarea class="form-control" rows="4" placeholder="Escribe tu consulta aquí"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-check mb-4 wow fadeInUp">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label text-light small" for="flexCheckDefault">
                                                Al enviar, acepto los <a href="#"
                                                    class="text-decoration-underline">Términos y Condiciones</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="submit" value="Solicitar Ahora"
                                            class="btn btn-dark wow fadeInUp text-light fs-14px">
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
