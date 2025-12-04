import React from "react";
import aboutImg from "../image/foto1.png";

const About = () => {
  return (
    <section className="container" id="sobremi">
      <h2 className="about-title reveal reveal-up">Sobre Mí</h2>

      <div className="about-container">
        <div className="ring">
          <i></i>
          <i></i>
          <i></i>
          <img src={aboutImg} alt="Gimena Sande" className="perfil-img" />
        </div>

        <div className="text-container">
          <h3 className="reveal">Hola, soy Gimena Sande</h3>

          <p>
            Soy Desarrolladora Full Stack con experiencia en proyectos web y
            aplicaciones. Me especializo en interfaces atractivas y funcionales
            utilizando buenas prácticas del desarrollo moderno.
          </p>

          <p>
            También cuento con experiencia como Analista de Métricas, lo que
            complementa mi perfil técnico con análisis y organización de datos.
          </p>

          <p>
            Trabajo en proyectos que combinan diseño, desarrollo y mejora
            continua, buscando siempre la excelencia.
          </p>

          <p>
            Cuando no programo, disfruto leer, explorar nuevas tecnologías y
            compartir conocimientos con la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
