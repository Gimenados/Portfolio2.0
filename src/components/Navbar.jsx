import React from 'react';

// image
import casa from '../image/casa.png';
import buscar from '../image/buscar.png';
import proyect from '../image/bombilla-de-idea.png';
import servicio from '../image/servicios.png';
import contacto from '../image/llamada-telefonica.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#inicio">
                <img src={casa} alt="Inicio" width="40px" height="auto" className="icon-navbar" />Inicio</a>
            </li>
            <li>
              <a href="#sobremi">
                <img src={buscar} alt="Sobre mí" width="40px" height="auto" className="icon-navbar" />Sobre mi</a>
            </li>
            <li>
              <a href="#proyectos">
                <img src={proyect} alt="Proyectos" width="40px" height="auto" className="icon-navbar" />Proyectos</a>
            </li>
            <li>
              <a href="#tecnology">
                <img src={servicio} alt="Tecnologías" width="40px" height="auto" className="icon-navbar" />Tecnologias</a>
            </li>
            <li>
              <a href="#contacto">
                <img src={contacto} alt="Contacto" width="40px" height="auto" className="icon-navbar" />Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
