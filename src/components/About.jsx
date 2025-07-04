import React from 'react';

// Image
import about from '../image/foto1.png';

// SOBREMI

const About = () => {
  return (
    <section className="container" id="sobremi">
      <h2 className="about-title">Sobre Mí</h2>
      <div className="about-container">
        <div className="ring">
          <i></i>
          <i></i>
          <i></i>
          <img src={about} alt="Gimena Sande" className="perfil-img" />
        </div>
        <div className="text-container">
          <h3>Hola, soy Gimena Sande</h3>
          <p style={{fontWeight: '2.5rem', lineHeight: '2' }}>
            Soy desarrolladora FullStack con experiencia en proyectos web y aplicaciones.
            Me especializo en crear interfaces atractivas y funcionales utilizando las mejores prácticas del desarrollo web moderno. <br /><br />
            Actualmente, trabajo en proyectos que combinan mi pasión por el diseño y el desarrollo, buscando siempre la excelencia en cada línea de código que escribo. <br /><br />
            Cuando no estoy programando, disfruto de leer, explorar nuevas tecnologías y compartir conocimientos con la comunidad de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
