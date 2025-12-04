import React, { useState } from "react";

import coctel from "../image/coctel.png";
import restaurante from "../image/restaurante.png";
import restauranteIcon from "../image/restaurante (1).png";
import oso from "../image/oso-de-peluche.png";
import jugueteria from "../image/jugueteria.png";
import palomitas from "../image/palomitas-de-maiz.png";
import peliculas from "../image/peliculas.png";

const projectsData = [
  {
    title: "Películas",
    stack: "Fullstack",
    category: "fullstack",
    status: "completado",
    characterImg: palomitas,
    coverImg: peliculas,
    link: palomitas,
  },
  {
    title: "Restaurante",
    stack: "Frontend",
    category: "frontend",
    status: "en-curso",
    characterImg: restauranteIcon,
    coverImg: restaurante,
    link: coctel,
  },
  {
    title: "Juguetería",
    stack: "Fullstack",
    category: "fullstack",
    status: "completado",
    characterImg: oso,
    coverImg: jugueteria,
    link: oso,
  },
];

// FILTROS DISPONIBLES
const filters = ["todos", "frontend", "fullstack"];

const Proyectos = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredProjects =
    activeFilter === "todos"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="container" id="proyectos">
      <h2 className="about-title">Proyectos</h2>

      {/* FILTROS */}
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`filter-btn ${activeFilter === f ? "active-filter" : ""}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="card-container">
        {filteredProjects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-inner">
              <p className="heading">{p.title}</p>

              {/* Tag / categoría */}
              <span className="tag">{p.stack}</span>

              {/* ESTADO */}
              <span className={`status-chip ${p.status}`}>
                {p.status === "completado" ? "✔ Completado" : "⏳ En curso"}
              </span>

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
