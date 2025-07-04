import React from 'react';

// imagenes
import coctel from '../image/coctel.png';
import restaurante from '../image/restaurante.png';
import restauranteIcon from '../image/restaurante (1).png';
import oso from '../image/oso-de-peluche.png';
import jugueteria from '../image/jugueteria.png';
import palomitas from '../image/palomitas-de-maiz.png';
import peliculas from '../image/peliculas.png';


const Projects = () => {
  const projects = [
      {
    title: 'Películas',
    characterImg: palomitas,
    coverImg: peliculas,
    link: palomitas
  },
  {
    title: 'Restaurante',
    characterImg: restauranteIcon,
    coverImg: restaurante,
    link: coctel
  },
  {
    title: 'Juguetería',
    characterImg: oso,
    coverImg: jugueteria,
    link: oso
  }
  ];

  return (
    <section className="container" id="proyectos">
      <h2 className="about-title">Proyectos</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="wrapper">
              <img src={project.characterImg} className="character" alt={project.title} />
              <img src={project.coverImg} className="cover-image" alt={project.title} />
            </div>
            <span className="badge">Fullstack</span>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
