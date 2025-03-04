import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="logo">
        <Link to="/">Mi Portfolio</Link>
      </div>

      {/* Icono de hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">X</span>
        ) : (
          <span className="open-icon">☰</span>
        )}
      </div>

      {/* Enlaces del menú */}
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre Mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
