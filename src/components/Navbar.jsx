import React, { useState } from 'react';

// images
import casa from '../image/casa.png';
import buscar from '../image/buscar.png';
import proyect from '../image/bombilla-de-idea.png';
import servicio from '../image/servicios.png';
import contacto from '../image/llamada-telefonica.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <header>
        <nav className={open ? "open" : ""}>

          {/* BOTÓN HAMBURGUESA */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* MENÚ */}
          <ul>
            <li>
              <a href="#inicio">
                <img src={casa} alt="Inicio" height="auto" className="icon-navbar" />Inicio
              </a>
            </li>

            <li>
              <a href="#sobremi">
                <img src={buscar} alt="Sobre mí" height="auto" className="icon-navbar" />Sobre mi
              </a>
            </li>

            <li>
              <a href="#proyectos">
                <img src={proyect} alt="Proyectos" height="auto" className="icon-navbar" />Proyectos
              </a>
            </li>

            <li>
              <a href="#tecnology">
                <img src={servicio} alt="Tecnologías" height="auto" className="icon-navbar" />Tecnologías
              </a>
            </li>

            <li>
              <a href="#contacto">
                <img src={contacto} alt="Contacto" height="auto" className="icon-navbar" />Contacto
              </a>
            </li>
          </ul>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;

