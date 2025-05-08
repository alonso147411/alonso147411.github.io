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
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>React</li>
                
            </ul>
            <h3>Herramientas</h3>
            <ul>
                <li>Github</li>
                <li>Docker</li>
                <li>MySQL</li>
                <li>Postman</li>
                <li>Figma</li>
            </ul>
        </div>

        <div className="education">
            <h3>Educación</h3>
            <p>C1 de Inglés</p>
            <p>Grado en Ingeniería Informática en la UPNA 2021 - Presente</p>
        </div>
        <p><a href="/Currículum_Vitae.pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar mi CV</a></p>
    </section>
);
}

export default About;
