import React from "react";
import "./Projects.css";

function Projects() {
return (
    <section id="projects" className="projects">
        <h2 data-aos="fade-left">Mis Proyectos</h2>
        <div className="project-list">
            <div className="project-card" data-aos="zoom-in">
                <h3>Gestor de contraseñas</h3>
                <p>Un app gestor de contraseñas para no guardarlas en el navegador.</p>
                <a href="https://github.com/alonso147411/Password_gestor" target = "_blanck" className="btnVerMas">Ver más</a>
            </div>
            <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
                <h3>VitaBite</h3>
                <p>Aplicación de Nutrición y Entrenamiento Personalizado</p>
                <a href="https://github.com/alonso147411/VitaBite" target = "_blanck"  className="btnVerMas">Ver más</a>
            </div>
            <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
                <h3>Sentia</h3>
                <p>Una aplicación web diseñada para mejorar la comunicación y preservar la salud mental entre parejas</p>
                <a href="https://github.com/alonso147411/Sentia"  target = "_blanck" className="btnVerMas">Ver más</a>
            </div>
            <div className="project-card" data-aos="zoom-in" data-aos-delay="600">
                <h3>Katas</h3>
                <p>Katas hechas en clase de la universidad</p>
                <a href="https://github.com/alonso147411?tab=repositories&q=&type=public&language=&sort=" target = "_blanck" className="btnVerMas">Ver más</a>
            </div>
            <div className="project-card" data-aos="zoom-in" data-aos-delay="600">
                <h3>WhatsApp Wrap</h3>
                <p>Analisis de conversaciones de WhatsApp</p>
                <a href="https://github.com/alonso147411/WhatsAppWrap" target = "_blanck" className="btnVerMas">Ver más</a>
            </div>
        </div>
    </section>
);
}

export default Projects;
