import React from "react";
import cvGimena from "../image/CurriculumVitae.pdf";

const FraseCV = () => {
  return (
    <div className="frasecv-container">
      <p className="typing">
        Transformo ideas en interfaces modernas, rápidas y funcionales.
      </p>

      <a
        href={cvGimena}
        download="Gimena-Sande-CV.pdf"
        className="btn-cv reveal"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default FraseCV;
