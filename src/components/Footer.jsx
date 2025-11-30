import React from "react";

const FooterBubbles = () => {
  const bubbles = Array.from({ length: 80 });

  return (
    <>
      {/* Filtro SVG para el efecto “blob” */}
      <svg className="footer-svg" aria-hidden="true">
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>

      <footer className="bubble-footer">
        {/* Capa de burbujas arriba */}
        <div className="bubble-footer__bubbles">
          {bubbles.map((_, i) => {
            const size = 2 + Math.random() * 4;
            const distance = 6 + Math.random() * 4;
            const position = -5 + Math.random() * 110;
            const time = 2 + Math.random() * 2;
            const delay = -1 * (2 + Math.random() * 2);

            return (
              <div
                key={i}
                className="bubble"
                style={{
                  "--size": `${size}rem`,
                  "--distance": `${distance}rem`,
                  "--position": `${position}%`,
                  "--time": `${time}s`,
                  "--delay": `${delay}s`,
                }}
              />
            );
          })}
        </div>

        <div className="bubble-footer__content">
          <div className="footer-columns">
            <div>
              <b>Proyectos</b>
              <a href="#proyectos">Películas</a>
              <a href="#proyectos">Restaurante</a>
              <a href="#proyectos">Juguetería</a>
            </div>
            <div>
              <b>Secciones</b>
              <a href="#inicio">Inicio</a>
              <a href="#sobremi">Sobre mí</a>
              <a href="#tecnologias">Tecnologías</a>
              <a href="#contacto">Contacto</a>
            </div>
            <div>
              <b>Contacto</b>
              <a href="mailto:tucorreo@ejemplo.com">tucorreo@ejemplo.com</a>
              <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p>©{new Date().getFullYear()} Gimena Sande</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBubbles;
