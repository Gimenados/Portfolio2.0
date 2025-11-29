import React from "react";

import coctel from "../image/coctel.png";
import restaurante from "../image/restaurante.png";
import restauranteIcon from "../image/restaurante (1).png";
import oso from "../image/oso-de-peluche.png";
import jugueteria from "../image/jugueteria.png";
import palomitas from "../image/palomitas-de-maiz.png";
import peliculas from "../image/peliculas.png";

const projects = [
  { title: "Películas", characterImg: palomitas, coverImg: peliculas, link: palomitas },
  { title: "Restaurante", characterImg: restauranteIcon, coverImg: restaurante, link: coctel },
  { title: "Juguetería", characterImg: oso, coverImg: jugueteria, link: oso }
];

const Projects = () => {
  return (
    <section className="container" id="proyectos">
      <h2 className="about-title">Proyectos</h2>

      <div className="card-container">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <div className="wrapper">
              <img src={p.characterImg} className="character" alt={p.title} />
              <img src={p.coverImg} className="cover-image" alt={p.title} />
            </div>

            <span className="badge">Fullstack</span>

            <a href={p.link} target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
