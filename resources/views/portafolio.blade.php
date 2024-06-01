@extends('app')
@section('content')
    <!--Contents-->
    <main class="">
        <!-- ==================== Start Header ==================== -->
        <header class="valign">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="cont text-center">

                            <h1> GREGORIO OSORIO <br> Portafolio </h1>
                            <a href="#paginasweb" class="btn rounded-pill bg-white fw-bold color-darkBlue mt-50 me-2">
                                <small class="text-uppercase"> Paginas Web </small>
                            </a>
                            <a href="https://siglotecnologico.com/servicios" target="_blank"
                                class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                                <small class="text-uppercase"> Nuestros Servicios </small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="circle-img">
                <img src="landing-preview/img/circle.png" alt="">
            </div>

            <div class="mag-img">

                <div id="js-scene" data-invert-y="true" data-invert-x="true">

                    <div class="imgs one">

                        <div class="top layer" data-depth="0.10">

                        </div>

                        <div class="bottm btm1 layer" data-depth="0.15">

                        </div>
                        <div class="bottm btm2 layer" data-depth="0.20">

                        </div>
                    </div>

                    <div class="imgs three">

                        <div class="top layer" data-depth="0.10">

                        </div>

                        <div class="bottm btm1 vers layer" data-depth="0.15">

                        </div>
                        <div class="bottm btm2 vers layer" data-depth="0.20">

                        </div>
                    </div>

                    <div class="imgs four">

                        <div class="top layer" data-depth="0.10">

                        </div>

                        <div class="bottm btm1 layer" data-depth="0.15">

                        </div>
                        <div class="bottm btm2 layer" data-depth="0.20">

                        </div>
                    </div>
                </div>

                <div id="js-scene2" data-invert-y="false" data-invert-x="false">

                    <div class="imgs two">

                        <div class="top layer" data-depth="0.10">

                        </div>

                        <div class="bottm btm1 vers layer" data-depth="0.15">

                        </div>
                        <div class="bottm btm2 vers layer" data-depth="0.20">

                        </div>
                    </div>

                    <div class="imgs five">

                        <div class="top layer" data-depth="0.10">

                        </div>

                        <div class="bottm btm1 layer" data-depth="0.15">

                        </div>
                        <div class="bottm btm2 layer" data-depth="0.20">

                        </div>
                    </div>

                    <div class="mob">

                        <div class="layer" data-depth="0.10">

                        </div>
                    </div>
                </div>

            </div>
        </header>

        <!-- ==================== End Header ==================== -->

        <!-- ==================== Start feat ==================== -->
        <section class="feat-dark" data-overlay-dark="0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="item d-flex text-white">
                            <div class="icon">
                                <span class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-code-slash"></i>
                                </span>
                            </div>
                            <div class="cont">
                                <h6>Desarrollo Web Full Stack</h6>
                                <p>Más de 4 años de experiencia desarrollando plataformas y sistemas internos, con
                                    habilidades en React y Laravel.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="item d-flex text-white">
                            <div class="icon">
                                <span class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-tools"></i>
                                </span>
                            </div>
                            <div class="cont">
                                <h6>Optimización y Mantenimiento</h6>
                                <p>Experiencia en optimización de bases de datos PostgreSQL y colaboración en diseño de
                                    sistemas intranet y extranet.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="item d-flex text-white">
                            <div class="icon">
                                <span class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-people"></i> <!-- Icono para Liderazgo y Colaboración -->
                                </span>
                            </div>
                            <div class="cont">
                                <h6>Liderazgo y Colaboración</h6>
                                <p>Capacidad demostrada para liderar proyectos complejos y colaborar en equipo, participando
                                    en reuniones y documentación técnica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pattern bg-img"></div>
        </section>



        <!-- ==================== End feat ==================== -->


        <!-- ==================== Start paginas web ==================== -->
        <section class="demos section-padding  bg-light" id="paginasweb">
            <div class="container-xxl">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-10">
                        <div class="sec-head text-center mb-40">
                            <h2 class="num"><span class="color-grd">WEB<span class="thin"></span></span></h2>
                            <h3 class="text-capitalize">Algo de lo que hemos hecho</h3>
                            <p class="color-777">Como desarrollador web, he creado estas páginas web utilizando una
                                variedad de tecnologías para diferentes propósitos y sectores. Cada página web refleja mi
                                habilidad para crear diseños modernos y funcionales que satisfacen las necesidades de los
                                clientes.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="item item_ribbon red">
                            <a href="fundaciondiosesbuenofielyjusto.org" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/fundaciondiosesbuenofielyjusto.png') }}"
                                        alt="">
                                </div>
                                <div class="info">
                                    <span>Fundación </span>
                                    <h6>Fundación Dios es Bueno 2024</h6>
                                </div>
                            </a>
                            <div class="new_demo_label">
                                <span> hot </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="item">
                            <a href="https://datamarketingplus.ec/" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/datamarketingplus.png') }}" alt="">
                                </div>
                                <div class="info">
                                    <span>Marketing Startup</span>
                                    <h6>DatamarketingPlus 2022</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="item">
                            <a href="https://estudiojuridicotagle.com/" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/tagle.png') }}" alt="">
                                </div>
                                <div class="info">
                                    <span>Estudio Jurídico</span>
                                    <h6>Estudio Jurídico Tagle 2022</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="item item_ribbon">
                            <a href="https://intercobec.com/" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/intercobec.png') }}" alt="">
                                </div>
                                <div class="info">
                                    <span>Estudio Jurídico</span>
                                    <h6>Estudio Jurídico Intercobec 2023</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="item">
                            <a href="https://carbonylena.net/" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/carbonylena.png') }}" alt="">
                                </div>
                                <div class="info">
                                    <span>Restaurante</span>
                                    <h6>Carbon & Leña 2022</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="item">
                            <a href="https://carbonylena.net/" target="_blank">
                                <div class="img">
                                    <img src="{{ asset('assets/img/portafolio/movistarecuador-net.png') }}"
                                        alt="">
                                </div>
                                <div class="info">
                                    <span>Ecommerce</span>
                                    <h6>Movistar Ecuador 2024</h6>
                                </div>
                            </a>
                        </div>
                    </div>



                </div>
            </div>
        </section>
        <!-- ==================== End paginas web  ==================== -->


        <!-- ==================== Start fullwebsite ==================== -->
        <section class="fullwebsite section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="tablet">
                            <div class="img">
                                <img src="landing-preview/img/inner_pages/about.png" alt="">
                            </div>
                            <img src="landing-preview/img/ipad1.png" alt="" class="tablet_img">
                            <img src="landing-preview/img/ref1.png" alt="" class="ref">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ==================== end fullwebsite ==================== -->


        <!-- ==================== Start ==================== -->

        <section class="box-gr">
            <div class="container-xxl box">
                <div class="row">
                    <div class="col-lg-5 valign">
                        <div class="cont mb-5 mb-lg-0">
                            <h2 class="mb-20 text-capitalize">Obtén Ahora y Recibe Actualizaciones Frecuentes</h2>
                            <p class="color-777 lh-6 fs-14px">Al obtener mis servicios hoy, disfrutarás de actualizaciones
                                periódicas. ¡Estoy constantemente trabajando en nuevas funciones y mejoras para tus
                                proyectos web y de software!</p>
                            <a href="https://siglotecnologico.com/contactos"
                                class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                                <small class="text-uppercase">Contáctame</small>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <div class="img">
                            <img src="landing-preview/img/b1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- ==================== End ==================== -->

        <!-- ==================== Start portfolio ==================== -->

        <section class="portfolio-blocks section-padding bg-gray">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="sec-head text-center mb-80">
                        <h3 class="num"><span class="gr">10<span class="thin">+</span></span></h3>
                        <h2>Aplicaciones Web y Proyectos Recientes</h2>
                        <p class="color-777">Descubre una colección de aplicaciones web y proyectos recientes que he
                            desarrollado. Cada uno demuestra mi compromiso con la calidad y la innovación.</p>
                    </div>
                    <div class="col-12">
                        <div class="main-marq">
                            <div class="slide-har st1">

                                <div class="box">
                                    <div class="item">
                                        <img src="landing-preview/img/header/1.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/2.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/3.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/4.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/5.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/6.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/7.jpg" alt="">
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="item">
                                        <img src="landing-preview/img/header/1.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/2.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/3.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/4.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/5.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/6.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/7.jpg" alt="">
                                    </div>
                                </div>

                            </div>
                            <div class="slide-har st2">

                                <div class="box">
                                    <div class="item">
                                        <img src="landing-preview/img/header/8.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/9.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/11.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/13.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/12.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/10.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/14.jpg" alt="">
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="item">
                                        <img src="landing-preview/img/header/8.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/9.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/11.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/13.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/12.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/10.jpg" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="landing-preview/img/header/14.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== End portfolio ==================== -->

        <!-- ==================== Start ==================== -->

        <section class="codei section-padding">
            <div class="container-xxl box px-4">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="cont mb-5 mb-lg-0">
                            <h2 class="mb-20 lh-3 fs-2 text-capitalize">Experto en Desarrollo Web con WordPress</h2>
                            <p class="color-777 lh-6 fs-14px">Con años de experiencia en WordPress, he creado y
                                personalizado numerosos sitios web adaptados a las necesidades específicas de mis clientes.
                                Mi enfoque es proporcionar soluciones rápidas, móviles y fáciles de usar.</p>
                            <a href="https://siglotecnologico.com/contactos" target="_blank"
                                class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                                <small class="text-uppercase">Contactar</small>
                            </a>
                        </div>


                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <div class="img">
                            <img src="landing-preview/img/b3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== End ==================== -->

        <!-- ==================== Start Best-feat ==================== -->

        <section class="best-feat section-padding" data-overlay-dark="0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-code-slash"></i>
                            </span>
                            <h6>Desarrollo Web</h6>
                            <p>Experto en la creación y personalización de sitios web con WordPress, ofreciendo soluciones a
                                medida para cada cliente.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-brush"></i>
                            </span>
                            <h6>Diseño Creativo</h6>
                            <p>Habilidades avanzadas en diseño gráfico y creación de interfaces intuitivas y atractivas que
                                mejoran la experiencia del usuario.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-gear"></i>
                            </span>
                            <h6>Personalización de Temas</h6>
                            <p>Amplia experiencia en la personalización de temas de WordPress, ajustando cada detalle para
                                satisfacer las necesidades específicas de cada proyecto.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-laptop"></i>
                            </span>
                            <h6>Responsive Design</h6>
                            <p>Desarrollo de sitios web responsivos que se adaptan perfectamente a cualquier dispositivo,
                                asegurando una experiencia de usuario óptima.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-speedometer2"></i>
                            </span>
                            <h6>Optimización de Rendimiento</h6>
                            <p>Optimización de sitios web para garantizar tiempos de carga rápidos y un rendimiento
                                eficiente, mejorando la satisfacción del usuario.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-50">
                        <div class="item">
                            <span class="icon">
                                <i class="bi bi-lock"></i>
                            </span>
                            <h6>Seguridad Web</h6>
                            <p>Implementación de las mejores prácticas de seguridad para proteger los sitios web contra
                                amenazas y vulnerabilidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== End Best-feat ==================== -->

        <!-- ==================== Start Responsive ==================== -->

        <section class="respons section-padding">
            <div class="container-xxl">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="img md-mb50">
                            <img src="landing-preview/img/b2.png" alt="">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1 valign">
                        <div class="cont">
                            <h6 class="sub-title d-inline-block text-uppercase ltspc-4 color-grd mb-20">Adaptabilidad del
                                Template</h6>
                            <h2 class="fs-1 text-capitalize">Totalmente receptivo y <br> listo para retina</h2>
                            <p class="fs-6 mt-10 color-777">Asegúrate de que tu nuevo sitio web se vea genial en cualquier
                                resolución de pantalla y dispositivo posible.</p>
                            <a href="https://siglotecnologico.com/services" target="_blank"
                                class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                                <small class="text-uppercase"> Servicios </small>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ==================== End Responsive ==================== -->

        <!-- ==================== Start all-feat ==================== -->

        <section class="all-feat" data-overlay-dark="0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="main-marq">
                            <div class="slide-har st1">

                                <div class="box">
                                    <!-- Skills -->
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-umbrella"></span>
                                        <h6>PHP</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-users"></span>
                                        <h6>Laravel</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-speaker"></span>
                                        <h6>Vue</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-github"></span>
                                        <h6>Git</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-javascript"></span>
                                        <h6>JavaScript</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-anchor"></span>
                                        <h6>Livewire</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-plane"></span>
                                        <h6>React</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-database"></span>
                                        <h6>MySQL</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-server"></span>
                                        <h6>SQL Server</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-plugin"></span>
                                        <h6>PostgreSQL</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-pen"></span>
                                        <h6>Bootstrap</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-css"></span>
                                        <h6>CSS</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-html5"></span>
                                        <h6>HTML</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-edit"></span>
                                        <h6>WordPress</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-phone"></span>
                                        <h6>Asterisk</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-call"></span>
                                        <h6>ViciBox</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-tux"></span>
                                        <h6>Linux</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-windows"></span>
                                        <h6>Windows</h6>
                                    </div>
                                </div>



                            </div>
                            <div class="slide-har st2">
                                <!-- Cursos -->
                                <div class="box">
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>PHP Avanzado</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Data Science e Inteligencia Artificial</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>PHP con Laravel</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Administración de PostgreSQL</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Bases para Analítica y Ciencia de Datos</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Fundamentos de Node.js</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Redes (Network Installer Specialist)</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>IA para Data y Machine Learning</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Bases de Datos</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>API REST con Express.js</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Fundamentos de Python</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Desarrollo y Deployment en WordPress</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Fundamentos de Cloud Computing</h6>
                                    </div>
                                    <div class="item d-flex align-items-center justify-content-between">
                                        <span class="icon pe-7s-study"></span>
                                        <h6>Comprehensions, Funciones de Python</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== End all-feat ==================== -->



        <!-- ==================== Start testim ==================== -->

        <section class="cal-actn section-padding text-white" data-overlay-dark="0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cont text-center">
                            <h3 class="num"><span class="gr">0988492339<span class="thin">+</span></span></h3>
                            <h6 class="sub-title inline gr-sunrise-text my-3 text-uppercase">Licencias vendidas y contando
                            </h6>
                            <h2>¡Desata tu creatividad hoy!</h2>
                            <p class="mt-15">Soy Gregorio Osorio, un apasionado Desarrollador de Software con un enfoque
                                innovador y una visión creativa. Mi portafolio es un testimonio de mi dedicación a crear
                                experiencias digitales impactantes y soluciones efectivas para mis clientes. ¿Listo para
                                llevar tu negocio al siguiente nivel?</p>
                            <a href="https://siglotecnologico.com/contactos" target="_blank"
                                class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                                <small class="text-uppercase"> Contactame </small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="circle-img">
                <img src="landing-preview/img/circle.png" alt="">
            </div>
        </section>




        <!-- ==================== End testim ==================== -->

    </main>
    <!--End-Contents-->
@endsection
