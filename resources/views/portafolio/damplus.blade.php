@extends('app')
@section('content')
    <section class="about-app style-5">
        <div class="container">
            <div class="content text-center">
                <h1 class="color-000 mb-50">Intranet - Damplus</h1>
                <div class="about-cards border-bottom brd-gray">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="about-card mb-30 mb-lg-0">
                                <small class="d-block">
                                    Cliente
                                </small>
                                <h6>
                                    DatamarketingPlus S.A, <br> Guayaquil - Ecuador
                                </h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="about-card mb-30 mb-lg-0">
                                <small class="d-block">
                                    Servicios
                                </small>
                                <h6>
                                    Consultoria, Desarrollo, y Diseño.
                                </h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="about-card mb-30 mb-lg-0">
                                <small class="d-block">
                                    date
                                </small>
                                <h6>
                                    Mar, 2018
                                </h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="about-card mb-30 mb-lg-0">
                                <small class="d-block">
                                    Equipo
                                </small>
                                <h6>
                                    Gregorio Osorio - Developer
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    <!-- ====== end about ====== -->


    <!-- ====== start challenge ====== -->
    <div class="challenge section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4">
                    <div class="section-head style-5">
                        <h2 class=""> Nuestro <br> <span> Desafío </span> </h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="inf">
                        <div class="text color-666 mb-20">
                            Diseñar y desarrollar una intranet para automatizar procesos internos, optimizando la eficiencia operativa y la colaboración interna.
                        </div>
                        <ul class="color-000">
                            <li class="d-flex mb-10">
                                <i class="bi bi-dot fs-6 me-2"></i>
                                Crear un espacio centralizado para la gestión de documentos y recursos.
                            </li>
                            <li class="d-flex mb-10">
                                <i class="bi bi-dot fs-6 me-2"></i>
                                Mejorar la comunicación entre departamentos a través de herramientas colaborativas.
                            </li>
                            <li class="d-flex mb-10">
                                <i class="bi bi-dot fs-6 me-2"></i>
                                Asegurar el acceso seguro y eficiente a la información de la empresa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="imgs mt-60 mb-100">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/login.png') }}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/1-MODULO-DE-CAJA.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-5">
                <div class="col-lg-4">
                    <div class="section-head style-5">
                        <h2 class=""> Solución y <br> <span> Resultados </span> </h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="inf">
                        <div class="text color-666 mb-10">
                            Implementamos una intranet intuitiva y robusta que centraliza todos los recursos y herramientas necesarios para el trabajo diario, facilitando la colaboración y la gestión de tareas.
                        </div>
                        <div class="text color-666 mb-20">
                            La intranet desarrollada incluye varias funcionalidades que han mejorado significativamente la eficiencia operativa de DataMarketingPlus.
                        </div>
                        <div class="color-000 mt-50">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="d-flex mb-20 fw-bold">
                                        <div class="icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue5 text-white flex-shrink-0 me-3">
                                            <i class="bi bi-check"></i>
                                        </div>
                                        Gestión de documentos y recursos centralizados.
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex mb-20 fw-bold">
                                        <div class="icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue5 text-white flex-shrink-0 me-3">
                                            <i class="bi bi-check"></i>
                                        </div>
                                        Herramientas colaborativas para mejorar la comunicación.
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex mb-20 mb-lg-0 fw-bold">
                                        <div class="icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue5 text-white flex-shrink-0 me-3">
                                            <i class="bi bi-check"></i>
                                        </div>
                                        Acceso seguro y eficiente a la información.
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="d-flex mb-0 fw-bold">
                                        <div class="icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-blue5 text-white flex-shrink-0 me-3">
                                            <i class="bi bi-check"></i>
                                        </div>
                                        Automatización de procesos internos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 
    <div class="technology-integrations section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4">
                    <div class="section-head style-5">
                        <h2 class=""> Tecnologías e <br> <span> Integraciones </span> </h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="inf">
                        <div class="text color-666 mb-20">
                            La intranet de DataMarketingPlus se diseñó para optimizar la eficiencia operativa y mejorar la toma de decisiones mediante la integración de tecnologías clave y el desarrollo de módulos personalizados. Aquí se destacan las principales tecnologías e integraciones implementadas:
                        </div>
                        <ul class="color-000">
                            <li class="d-flex mb-10">
                                <i class="bi bi-dot fs-6 me-2"></i>
                                <div>
                                    <strong>Integración con Central Telefónica Vicidial:</strong><br>
                                    Consumo de datos de Vicidial para gestionar llamadas predictivas y generar indicadores clave de rendimiento.
                                </div>
                            </li>
                            <li class="d-flex mb-10">
                                <i class="bi bi-dot fs-6 me-2"></i>
                                <div>
                                    <strong>Integración con Sistema de Gestión de Cobranza:</strong><br>
                                    Extracción de datos del sistema de cobranza para facilitar la toma de decisiones y optimizar los procesos de seguimiento de pagos.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="section-head style-5 text-center mb-60">
                <h2 class=""> Módulos <span> Personalizados </span> </h2>
                <p>Para cubrir necesidades específicas no cubiertas por los sistemas integrados, desarrollé varios módulos personalizados dentro de la intranet:</p>
            </div>
            <div class="inf">
                <div class="text color-666 mb-20">
                    <ul class="color-000">
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Administración:</strong><br>
                                Gestiona roles, permisos, información de la empresa, cargos y personal. Este módulo asegura que solo usuarios autorizados accedan a información y funciones específicas, mejorando la seguridad y la administración interna.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Envío Masivo de Emails:</strong><br>
                                Permite la programación y envío de correos electrónicos a gran escala, optimizando la comunicación y las campañas de marketing.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Asignaciones de Cartera:</strong><br>
                                Asigna carteras a los asesores y actualiza la información de los clientes, garantizando una distribución equitativa y actualizada de las tareas.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Actualizaciones:</strong><br>
                                Maneja y actualiza la información de los clientes, asegurando que los datos siempre estén precisos y al día.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Reportería:</strong><br>
                                Genera indicadores de todo tipo, desde niveles de asesor hasta niveles gerenciales, proporcionando una visión clara y detallada del rendimiento.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Cobranza:</strong><br>
                                Gestiona la información de asignación y seguimiento de los asesores, optimizando el proceso de recuperación de deudas.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Ventas:</strong><br>
                                Similar al módulo de cobranza, pero enfocado en las actividades del área de ventas, mejorando el seguimiento y cierre de oportunidades comerciales.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Casas Comerciales:</strong><br>
                                Gestiona la carga de carteras y la descarga de informes para su envío a las distintas instituciones, facilitando la administración y el seguimiento de las colaboraciones comerciales.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Predictivo:</strong><br>
                                Maneja las automatizaciones de la central telefónica, permitiendo la carga de información para marcar por campaña en cada departamento, y proporcionando reportes e indicadores de rendimiento.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Operaciones:</strong><br>
                                Gestiona la calidad y revisión de información, asegurando que todos los procesos y datos cumplan con los estándares requeridos.
                            </div>
                        </li>
                        <li class="d-flex mb-10">
                            <i class="bi bi-dot fs-6 me-2"></i>
                            <div>
                                <strong>Módulo de Caja:</strong><br>
                                Maneja todo lo referente a pagos, recibos de pago, confirmaciones, y proporciona indicadores de pagos confirmados y por confirmar, mejorando la transparencia y eficiencia en las transacciones financieras.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="imgs mt-60 mb-100">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/1-MODULO-DE-OPERACIONES.png') }}" alt="Integración con Vicidial">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/1-MODULO-DE-CAJA.png') }}" alt="Integración con Vicidial">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/1-MODULO-DE-PREDICTIVO.png') }}" alt="Sistema de Gestión de Cobranza">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img img-cover rounded-3 overflow-hidden">
                            <img src="{{ asset('assets/img/portafolio/aplicaciones/BANDEJA-DE-AGENTES.png') }}" alt="Sistema de Gestión de Cobranza">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="development-process section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="section-head style-5 text-center mb-60">
                <h2 class=""> Proceso de <span> Desarrollo </span> </h2>
                <p>Para garantizar un desarrollo eficiente y efectivo de la intranet, seguimos un proceso estructurado y metodologías probadas. Aquí se detalla nuestro enfoque:</p>
            </div>
            <div class="inf">
                <div class="text color-666 mb-20">
                    <ol class="color-000">
                        <li class="mb-20">
                            <strong>Análisis de Requisitos:</strong><br>
                            Comenzamos el proceso identificando las necesidades específicas del cliente y los objetivos del proyecto. Esto incluye la definición de funcionalidades, requisitos técnicos y expectativas de rendimiento.
                        </li>
                        <li class="mb-20">
                            <strong>Diseño de la Arquitectura:</strong><br>
                            Desarrollamos una estructura técnica sólida y escalable para la intranet. Esto implica la planificación de la base de datos, la arquitectura de la información y la selección de tecnologías adecuadas.
                        </li>
                        <li class="mb-20">
                            <strong>Desarrollo Iterativo:</strong><br>
                            Adoptamos un enfoque iterativo en el desarrollo, lo que nos permite entregar incrementos de funcionalidad de manera continua. Esto permite una mayor flexibilidad para realizar ajustes y mejoras según las necesidades del cliente.
                        </li>
                        <li class="mb-20">
                            <strong>Pruebas Rigurosas:</strong><br>
                            Realizamos pruebas exhaustivas en cada etapa del desarrollo para garantizar la calidad y fiabilidad del sistema. Esto incluye pruebas de funcionalidad, rendimiento, seguridad y usabilidad.
                        </li>
                        <li class="mb-20">
                            <strong>Implementación y Despliegue:</strong><br>
                            Gestionamos cuidadosamente el proceso de implementación y despliegue para minimizar el tiempo de inactividad y garantizar una transición sin problemas a la nueva intranet. Esto incluye la capacitación del personal y la configuración de la infraestructura necesaria.
                        </li>
                        <li class="mb-20">
                            <strong>Soporte Continuo:</strong><br>
                            Proporcionamos soporte continuo y mantenimiento después del lanzamiento para garantizar el funcionamiento óptimo de la intranet a largo plazo. Esto incluye la resolución de problemas, actualizaciones de seguridad y mejoras de rendimiento.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="benefits-results section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="section-head style-5 text-center mb-60">
                <h2 class=""> Beneficios y <span> Resultados </span> </h2>
                <p>La implementación de la intranet en DataMarketingPlus ha traído consigo una serie de beneficios tangibles e intangibles. Aquí se destacan los principales resultados obtenidos:</p>
            </div>
            <div class="inf">
                <div class="text color-666 mb-20">
                    <ul class="color-000">
                        <li class="d-flex mb-20">
                            <i class="bi bi-check fs-6 me-2"></i>
                            <div>
                                <strong>Mejora en la Eficiencia Operativa:</strong><br>
                                La intranet ha optimizado los procesos internos, reduciendo el tiempo y los recursos necesarios para realizar tareas administrativas y operativas.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-check fs-6 me-2"></i>
                            <div>
                                <strong>Incremento en la Colaboración Interna:</strong><br>
                                La plataforma ha facilitado la comunicación y colaboración entre equipos y departamentos, mejorando la coordinación y el intercambio de información.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-check fs-6 me-2"></i>
                            <div>
                                <strong>Mayor Transparencia y Visibilidad:</strong><br>
                                Los sistemas de reportes y dashboards han proporcionado una visión clara y en tiempo real del rendimiento y los resultados del negocio, permitiendo una toma de decisiones más informada.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-check fs-6 me-2"></i>
                            <div>
                                <strong>Reducción de Errores y Tiempo de Respuesta:</strong><br>
                                La automatización de procesos y la centralización de la información han minimizado los errores humanos y agilizado la respuesta a consultas y solicitudes internas y externas.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-check fs-6 me-2"></i>
                            <div>
                                <strong>Mejora en la Experiencia del Usuario:</strong><br>
                                La interfaz intuitiva y amigable de la intranet ha mejorado la experiencia de usuario, aumentando la adopción y el uso de la plataforma por parte del personal de la empresa.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="training-adoption section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="section-head style-5 text-center mb-60">
                <h2 class=""> Proceso de Capacitación y <span> Adopción </span> </h2>
                <p>Para garantizar el éxito de la intranet en DataMarketingPlus, implementamos un proceso integral de capacitación y adopción para todo el personal. A continuación, se describe nuestro enfoque:</p>
            </div>
            <div class="inf">
                <div class="text color-666 mb-20">
                    <ol class="color-000">
                        <li class="mb-20">
                            <strong>Identificación de Necesidades:</strong><br>
                            Realizamos una evaluación detallada de las necesidades de capacitación de los diferentes equipos y departamentos para diseñar programas personalizados.
                        </li>
                        <li class="mb-20">
                            <strong>Desarrollo de Material de Capacitación:</strong><br>
                            Creamos materiales de capacitación personalizados, que incluyen guías de usuario, tutoriales en video, documentos de referencia y sesiones de entrenamiento en vivo.
                        </li>
                        <li class="mb-20">
                            <strong>Implementación de Sesiones de Capacitación:</strong><br>
                            Realizamos sesiones de capacitación en grupos pequeños o individuales, adaptadas a las necesidades específicas de cada equipo. Estas sesiones se llevan a cabo antes y después del lanzamiento de la intranet.
                        </li>
                        <li class="mb-20">
                            <strong>Apoyo Continuo y Recursos de Autoaprendizaje:</strong><br>
                            Proporcionamos recursos adicionales de aprendizaje, como documentos de ayuda en línea, foros de discusión y soporte técnico dedicado, para garantizar que el personal pueda seguir aprendiendo y mejorar su habilidad con la intranet.
                        </li>
                        <li class="mb-20">
                            <strong>Monitoreo y Retroalimentación:</strong><br>
                            Realizamos un seguimiento continuo del progreso de la adopción de la intranet y recopilamos comentarios del personal para identificar áreas de mejora y ajustar nuestros programas de capacitación según sea necesario.
                        </li>
                        <li class="mb-20">
                            <strong>Reconocimiento y Incentivos:</strong><br>
                            Reconocemos y recompensamos a los empleados que demuestran un alto nivel de competencia y compromiso con el uso efectivo de la intranet, fomentando así una cultura de adopción y participación.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="technologies-used section-padding style-5 overflow-hidden">
        <div class="container">
            <div class="section-head style-5 text-center mb-60">
                <h2 class=""> Tecnologías <span> Utilizadas </span> </h2>
                <p>La intranet de DataMarketingPlus ha sido desarrollada utilizando una combinación de tecnologías modernas y robustas para garantizar un rendimiento óptimo y una experiencia de usuario excepcional. A continuación, se detallan las principales tecnologías utilizadas:</p>
            </div>
            <div class="inf">
                <div class="text color-666 mb-20">
                    <ul class="color-000">
                        <li class="d-flex mb-20">
                            <i class="bi bi-arrow-right-short fs-6 me-2"></i>
                            <div>
                                <strong>PHP con Laravel:</strong><br>
                                Laravel es un framework de desarrollo de aplicaciones web en PHP que ofrece una sintaxis elegante y expresiva, junto con herramientas y bibliotecas para tareas comunes, lo que permite un desarrollo rápido y eficiente.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-arrow-right-short fs-6 me-2"></i>
                            <div>
                                <strong>Vue.js:</strong><br>
                                Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces de usuario interactivas y de una sola página. Su enfoque basado en componentes facilita la creación de interfaces dinámicas y reutilizables.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-arrow-right-short fs-6 me-2"></i>
                            <div>
                                <strong>JavaScript:</strong><br>
                                JavaScript es un lenguaje de programación utilizado para agregar interactividad y dinamismo a las páginas web. Se ha utilizado ampliamente en la intranet para crear funcionalidades avanzadas y mejorar la experiencia del usuario.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-arrow-right-short fs-6 me-2"></i>
                            <div>
                                <strong>Python:</strong><br>
                                Python es un lenguaje de programación versátil y fácil de aprender que se ha utilizado en el backend de la intranet para tareas específicas, como procesamiento de datos y automatización de procesos.
                            </div>
                        </li>
                        <li class="d-flex mb-20">
                            <i class="bi bi-arrow-right-short fs-6 me-2"></i>
                            <div>
                                <strong>MySQL y SQL Server:</strong><br>
                                MySQL y SQL Server son sistemas de gestión de bases de datos relacionales (RDBMS) utilizados para almacenar y gestionar datos en la intranet. Proporcionan un almacenamiento seguro y eficiente de la información empresarial.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
                
    
     
 
@endsection
