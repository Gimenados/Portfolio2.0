// import React, { useState } from 'react';

// // images
// import casa from '../image/casa.png';
// import buscar from '../image/buscar.png';
// import proyect from '../image/bombilla-de-idea.png';
// import servicio from '../image/servicios.png';
// import contacto from '../image/llamada-telefonica.png';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="nav-container">
//       <header>
//         <nav className={open ? "open" : ""}>

//           {/* BOTÓN HAMBURGUESA */}
//           <div className="hamburger" onClick={() => setOpen(!open)}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           {/* MENÚ */}
//           <ul>
//             <li>
//               <a href="#inicio">
//                 <img src={casa} alt="Inicio" height="auto" className="icon-navbar" />Inicio
//               </a>
//             </li>

//             <li>
//               <a href="#sobremi">
//                 <img src={buscar} alt="Sobre mí" height="auto" className="icon-navbar" />Sobre mi
//               </a>
//             </li>

//             <li>
//               <a href="#proyectos">
//                 <img src={proyect} alt="Proyectos" height="auto" className="icon-navbar" />Proyectos
//               </a>
//             </li>

//             <li>
//               <a href="#tecnology">
//                 <img src={servicio} alt="Tecnologías" height="auto" className="icon-navbar" />Tecnologías
//               </a>
//             </li>

//             <li>
//               <a href="#contacto">
//                 <img src={contacto} alt="Contacto" height="auto" className="icon-navbar" />Contacto
//               </a>
//             </li>
//           </ul>

//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";

// images
import casa from "../image/casa.png";
import buscar from "../image/buscar.png";
import proyect from "../image/bombilla-de-idea.png";
import servicio from "../image/servicios.png";
import contacto from "../image/llamada-telefonica.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="nav-container">

      {/* FONDO OSCURO SOLO CUANDO OPEN === TRUE */}
      <div
        className={`nav-backdrop ${open ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <header>
        {/* BOTÓN HAMBURGUESA */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV */}
        <nav className={open ? "open" : ""}>
          <ul>
            <li>
              <a href="#inicio" onClick={closeMenu}>
                <img src={casa} alt="Inicio" className="icon-navbar" />
                Inicio
              </a>
            </li>

            <li>
              <a href="#sobremi" onClick={closeMenu}>
                <img src={buscar} alt="Sobre mí" className="icon-navbar" />
                Sobre mi
              </a>
            </li>

            <li>
              <a href="#proyectos" onClick={closeMenu}>
                <img src={proyect} alt="Proyectos" className="icon-navbar" />
                Proyectos
              </a>
            </li>

            <li>
              <a href="#tecnology" onClick={closeMenu}>
                <img src={servicio} alt="Tecnologías" className="icon-navbar" />
                Tecnologías
              </a>
            </li>

            <li>
              <a href="#contacto" onClick={closeMenu}>
                <img src={contacto} alt="Contacto" className="icon-navbar" />
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
