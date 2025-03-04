import React from "react";
import "./About.css";
import profileImage from "../profile.jpg";

function About() {
return (
    <section id="about" className="about" data-aos="fade-right">
        <h2>Sobre Mí</h2>
        <img src={profileImage} alt="Foto de perfil" />
        <div className="skills">
            <h3>Lenguajes en los que se programar</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                {/* <li>React</li> */}
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                
            </ul>
        </div>

        <div className="education">
            <h3>Educación</h3>
            <p>C1 de Inglés</p>
            <p>Grado en Ingeniería Informática en la UPNA 2021 - Presente</p>
        </div>
        <p><a href="/path/to/mi-cv.pdf" target="_blank" class= "btn" rel="noopener noreferrer">Descargar mi CV</a></p>

    </section>
);
}

export default About;
