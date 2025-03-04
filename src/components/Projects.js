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
                <h3>Proyecto 2</h3>
                <p>Descripción breve del proyecto.</p>
                <a href="https://github.com" target = "_blanck"  className="btnVerMas">Ver más</a>
            </div>
            <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
                <h3>Proyecto 3</h3>
                <p>Descripción breve del proyecto.</p>
                <a href="https://github.com"  target = "_blanck" className="btnVerMas">Ver más</a>
            </div>
        </div>
    </section>
);
}

export default Projects;
