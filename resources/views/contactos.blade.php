@extends('app')
@section('content')
    <!--Contents-->
    <main class="contact-page style-5">
        <!-- ====== start contact page ====== -->
        <section class="community section-padding style-5">
            <div class="container">
                <div class="section-head text-center style-4 mb-40">
                    <small class="title_small">Contáctanos</small>
                    <h2 class="mb-20">Ponte en <span> Contacto </span> </h2>
                    <p>Nos pondremos en contacto contigo después de recibir tu solicitud en 2 horas</p>
                </div>
                <div class="content rounded-pill">
                    <div class="commun-card">
                        <div class="icon icon-45">
                            <img src="assets/img/icons/mail3d.png" alt="">
                        </div>
                        <div class="inf">
                            <h5>info@siglotecnologico.com </h5>
                        </div>
                    </div>
                    <div class="commun-card">
                        <div class="icon icon-45">
                            <img src="assets/img/icons/map3d.png" alt="">
                        </div>
                        <div class="inf">
                            <h5>Guayaquil-Ecuador</h5>
                        </div>
                    </div>
                    <div class="commun-card">
                        <div class="icon icon-45">
                            <img src="assets/img/icons/msg3d.png" alt="">
                        </div>
                        <div class="inf">
                            <h5>(+593) 849 23 39</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact section-padding pt-0 style-6">
            <div class="container">
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <form action="contact.php" class="form" method="post">
                                <p class="text-center text-danger fs-12px mb-30">Los campos marcados con * son obligatorios
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="name" class="form-control" placeholder="Nombre">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="email" class="form-control"
                                                placeholder="Correo Electrónico *">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="phone" class="form-control"
                                                placeholder="Número de Teléfono (opcional)">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-20">
                                            <input type="text" name="company" class="form-control"
                                                placeholder="Nombre de la Empresa (opcional)">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-20">
                                            <select name="option" class="form-select">
                                                <option value="how can we help" selected>Selecciona el motivo de tu consulta
                                                </option>
                                                <option value="consultoría">Consultoría en Transformación Digital</option>
                                                <option value="desarrollo">Desarrollo de Aplicaciones Empresariales</option>
                                                <option value="inteligencia">Inteligencia Artificial y Machine Learning
                                                </option>
                                                <option value="seguridad">Seguridad Informática y Ciberseguridad</option>
                                                <option value="cloud">Servicios en la Nube (Cloud Computing)</option>
                                                <option value="iot">Internet de las Cosas (IoT) y Dispositivos Conectados
                                                </option>
                                                <option value="analisis">Análisis de Datos y Big Data</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea rows="10" class="form-control" placeholder="Escribe tu mensaje aquí"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <div class="form-check d-inline-flex mt-30 mb-30">
                                            <input class="form-check-input me-2 mt-0" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label small" for="flexCheckDefault">
                                                Al enviar, acepto los <a href="#"
                                                    class="text-decoration-underline">Términos y Condiciones</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <input type="submit" value="Enviar Solicitud"
                                            class="btn rounded-pill bg-blue4 fw-bold text-white text-light fs-12px">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src="assets/img/icons/contact_a.png" alt="" class="contact_a">
                    <img src="assets/img/icons/contact_message.png" alt="" class="contact_message">
                </div>
            </div>
        </section>

        <!-- ====== end contact page ====== -->

        <!-- ====== start contact page ====== -->
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15947.780011467119!2d-79.9063566!3d-2.1745978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d52bbec0363%3A0x695a918d7c0005a0!2sSiglo%20Tecnol%C3%B3gico!5e0!3m2!1ses!2sec!4v1707536536490!5m2!1ses!2sec"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <!-- ====== start contact page ====== -->
    </main>
    <!--End-Contents-->
@endsection
