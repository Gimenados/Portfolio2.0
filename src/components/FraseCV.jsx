import React from "react";
// import "./FraseCV.css";

const FraseCV = () => {
  return (
    <div className="frasecv-container">
      <p className="typing">
        Transformo ideas en interfaces modernas, rápidas y funcionales.
      </p>

      <a
        href="/cv-gimena.pdf"
        download
        className="btn-cv"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default FraseCV;
