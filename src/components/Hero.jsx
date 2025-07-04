import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <h1>Hola! Soy Gimena Sande 👋</h1>
      <h2>FullStack Developer</h2>
      <p>
        Me apasiona construir soluciones digitales que hagan la vida más fácil,
        fusionando creatividad con funcionalidad.
      </p>
      <div className="icon-container">
        <a href="https://github.com/Gimenados" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
            <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.8 8.205 11.4.6.111.82-.26.82-.578 0-.287-.01-1.042-.016-2.048-3.339.724-4.043-1.605-4.043-1.605-.546-1.386-1.333-1.756-1.333-1.756-1.087-.743.084-.728.084-.728 1.205.084 1.837 1.236 1.837 1.236 1.068 1.826 2.8 1.298 3.48.992.108-.774.418-1.298.763-1.598-2.665-.303-5.466-1.333-5.466-5.933 0-1.312.468-2.384 1.236-3.22-.124-.303-.537-1.529.115-3.176 0 0 1.007-.322 3.303 1.229a11.525 11.525 0 0 1 3.003-.4c1.018.004 2.031.138 3.003.4 2.296-1.551 3.303-1.229 3.303-1.229.653 1.647.241 2.873.118 3.176.769.837 1.236 1.91 1.236 3.22 0 4.610-2.805 5.628-5.471 5.923.43.373.815 1.102.815 2.22 0 1.604-.014 2.91-.014 3.303 0 .318.22.695.825.578A12.001 12.001 0 0 0 24 12.297c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/gimena-anahi-sande-2260b817b/" target="_blank" rel="noopener noreferrer">
          <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
            <path d="M20.452 0H3.548C1.594 0 0 1.594 0 3.546v16.908C0 22.406 1.594 24 3.548 24h16.904C22.406 24 24 22.406 24 20.454V3.546C24 1.594 22.406 0 20.452 0ZM7.186 20.452H4.136V9.582h3.05v10.87ZM5.66 8.094c-1.012 0-1.79-.82-1.79-1.834.003-1.014.786-1.834 1.805-1.834 1.017 0 1.79.82 1.79 1.834 0 1.014-.775 1.834-1.79 1.834ZM20.452 20.452h-3.05v-5.288c0-1.292-.026-2.947-1.794-2.947-1.793 0-2.066 1.402-2.066 2.849v5.386H11.5V9.582h2.92v1.475h.041c.406-.768 1.397-1.579 2.866-1.579 3.072 0 3.643 2.027 3.643 4.657v6.227h-.001z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
