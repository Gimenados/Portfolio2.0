"use client";

import React, { useEffect, useState } from "react";
import aboutImg from "../image/foto1.png";

const About = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const res = await fetch("http://localhost:3001/status", { cache: "no-store" });
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        console.error("Error cargando el estado", error);
      }
    };

    loadStatus();
  }, []);

  const mode = status?.mode || "Disponible";
  const safeMode = mode.replace(/\s+/g, "-");
  const message = status?.message || "Respondo en 24–48 hs";

  return (
    <section className="container" id="sobremi">
      <h2 className="about-title reveal reveal-up">Sobre Mí</h2>

      <div className="about-container">
        <div className="ring">
          <i></i>
          <i></i>
          <i></i>
          <img
            src={aboutImg}
            alt="Gimena Sande"
            className="perfil-img"
          />
        </div>

        <div className="text-container">
          <h3 className="reveal">Hola, soy Gimena Sande</h3>

          <p>
            Soy desarrolladora web con experiencia en la creación de proyectos y
            aplicaciones orientadas a la web. Me enfoco en desarrollar interfaces
            claras, funcionales y responsivas, aplicando buenas prácticas del
            desarrollo moderno.
          </p>

          <p>
            Además, cuento con experiencia en análisis de métricas, lo que
            complementa mi perfil con una mirada analítica y organizada sobre la
            información y los procesos.
          </p>

          <p>
            Trabajo en proyectos que combinan diseño y desarrollo, priorizando la
            claridad, la usabilidad y la mejora continua en cada etapa.
          </p>

          <p>
            Fuera del desarrollo, me interesa seguir aprendiendo, explorar nuevas
            herramientas y mantenerme en constante crecimiento profesional.
          </p>

          {/* ESTADO / DISPONIBILIDAD (Node.js) */}
          <div className="availability">
            <span className={`dot ${safeMode}`} />
            <div>
              <b>Estado: {mode}</b>
              <p className="availability-msg">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

