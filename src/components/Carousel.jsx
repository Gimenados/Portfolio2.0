import React from 'react';

const Carousel = () => {
  const technologies = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", label: "Sass" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "ReactJS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
];


  return (
    <section className="carrusel">
      <div className="carrusel-container">
        <div className="carrusel-track">
          {technologies.map((tech, index) => (
            <div className="carrusel-item" key={index}>
              <img src={tech.src} alt={tech.label} />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
