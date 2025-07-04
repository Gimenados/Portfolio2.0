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
      <div className="container-tecnology" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'white', fontWeight: '2.5rem', textAlign: 'justify', lineHeight: '2' }}>
            Mi pasión y enfoque principal es el desarrollo Frontend, aunque cuento con una formación FullStack que me brinda una visión integral del desarrollo web.
            Tengo experiencia en HTML, CSS y JavaScript, así como en la creación de aplicaciones web pequeñas y medianas utilizando frameworks como Angular o React.
            Me especializo en la implementación de diseños interactivos, animaciones, complementos personalizados y funciones que mejoran la experiencia del usuario. <br /><br />
            Visita mi <a href="https://www.linkedin.com/in/gimena-anahi-sande-2260b817b/" style={{ textDecoration: 'none', fontWeight: '900', color: '#0b4066' }}>LinkedIn</a> para más detalles.
          </p>
        </div>
        <div className="section-avatar">
          <img
            src={avatar}
            alt="Tu avatar"
            className={`avatar ${animate ? 'animate' : ''}`}
            style={{ width: '120px', height: 'auto' }}
          />
        </div>
      </div>
    </article>
  );
};

export default Technologies;
