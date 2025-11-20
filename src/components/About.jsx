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
            Soy Desarrolladora Full Stack con experiencia en proyectos web y aplicaciones. Me especializo en crear interfaces atractivas y funcionales utilizando las mejores prácticas del desarrollo web moderno.
<br /><br />
Además, cuento con experiencia como Analista de Métricas, lo que complementa mi perfil técnico con una fuerte base en el manejo y la organización de información.
<br /><br />
Actualmente trabajo en proyectos que combinan mi pasión por el diseño, el desarrollo y la mejora continua, buscando siempre la excelencia en cada línea de código que escribo.
<br /><br />
Cuando no estoy programando, disfruto leer, explorar nuevas tecnologías y compartir conocimientos con la comunidad de desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
