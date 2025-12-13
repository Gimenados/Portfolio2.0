import React, { useEffect, useState } from 'react';

import avatar from '../image/avatar3.png';

const Technologies = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Pequeña espera para permitir la transición

    return () => clearTimeout(timer);
  }, []);

  return (
    <article id="tecnology">
      <h2 className="about-title">Tecnologías</h2>
      <div className="container-tecnology" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'white', fontWeight: '2.5rem', textAlign: 'justify', lineHeight: '2' }}>
            Mi principal enfoque es el desarrollo Frontend, respaldado por una formación Full Stack que me permite comprender el desarrollo web de forma integral. Tengo experiencia trabajando con HTML, CSS y JavaScript, así como en la creación de aplicaciones web pequeñas y medianas utilizando React.

Me especializo en la implementación de interfaces interactivas, animaciones y componentes personalizados, cuidando tanto el diseño como la funcionalidad para mejorar la experiencia del usuario. Busco que cada proyecto sea claro, atractivo y fácil de usar.
             <br /><br />
            Visita mi <a href="https://www.linkedin.com/in/gimena-anahi-sande-2260b817b/" style={{ textDecoration: 'none', fontWeight: '900', color: '#0b4066' }}>LinkedIn</a> para más detalles.
          </p>
        </div>
        <div className="section-avatar">
          <img
            src={avatar}
            alt="Tu avatar"
            className={`avatar ${animate ? 'animate' : ''}`}
          />
        </div>
      </div>
    </article>
  );
};

export default Technologies;
