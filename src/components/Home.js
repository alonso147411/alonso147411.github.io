import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


//import cv from "../assets/cv.pdf";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <div>
      {/* Sección Home */}
      <section className="home" data-aos="fade-up">
        <div className="content" >
          <h1>Hola, soy <span>Ana</span></h1>
          <p> Y este es mi portfolio</p>
          <a href="#about" className="btn">Sobre Mí</a>
          {/* <a href={cv} download="Ana_CV.pdf" className="btn">Descargar CV</a> */}
        </div>
      </section>

      {/* Secciones Importadas */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
