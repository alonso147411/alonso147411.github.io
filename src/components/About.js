import React from "react";
import "./About.css";
import profileImage from "../profile.jpg";

function About() {
return (
    <section id="about" className="about" data-aos="fade-right">
        <h2>Sobre Mí</h2>
        <img src={profileImage} alt="Foto de perfil" />
        <div className="skills">
            <h3>Habilidades</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                
            </ul>

        </div>
        <div className="experience">
            <h3>Experiencia</h3>
            <p>Cursando ingeniería informática en la UPNA</p>


        </div>
    </section>
);
}

export default About;
