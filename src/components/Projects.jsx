import React from "react";

import coctel from "../image/coctel.png";
import restaurante from "../image/restaurante.png";
import restauranteIcon from "../image/restaurante (1).png";
import oso from "../image/oso-de-peluche.png";
import jugueteria from "../image/jugueteria.png";
import palomitas from "../image/palomitas-de-maiz.png";
import peliculas from "../image/peliculas.png";

const projects = [
  {
    title: "Películas",
    stack: "Fullstack",
    characterImg: palomitas,
    coverImg: peliculas,
    link: palomitas,
  },
  {
    title: "Restaurante",
    stack: "Fullstack",
    characterImg: restauranteIcon,
    coverImg: restaurante,
    link: coctel,
  },
  {
    title: "Juguetería",
    stack: "Fullstack",
    characterImg: oso,
    coverImg: jugueteria,
    link: oso,
  },
];

const Proyectos = () => {
  return (
    <section className="container" id="proyectos">
      <h2 className="about-title">Proyectos</h2>

      <div className="card-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-inner">
              <p className="heading">{p.title}</p>

              {/* Tag / chip de categoría */}
              <span className="tag">{p.stack}</span>

              <div className="wrapper">
                <img
                  src={p.coverImg}
                  className="cover-image"
                  alt={p.title}
                />
                <img
                  src={p.characterImg}
                  className="character"
                  alt={p.title}
                />
              </div>

              <div className="project-footer">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;

