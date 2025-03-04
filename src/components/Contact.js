import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contacto</h2>
      <p>Envíame un mensaje a <strong>tuemail@example.com</strong> o sígueme en <strong>Linkedin</strong>.</p>
        <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="btn">Linkedin</a>
    </section>
    
  );
}

export default Contact;
