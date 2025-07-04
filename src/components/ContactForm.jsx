import React from 'react';

const ContactForm = () => {
  return (
    <section className="container" id="contacto">
      <h2 className="about-title">Contacto</h2>
      <form className="form-glow" action="" method="POST" encType="text/plain">
        <h4 className="form-subtitle">¿Querés contactarme? Escribime acá abajo 👇</h4>

        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre y apellido"
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />

        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          placeholder="Mensaje"
          required
        ></textarea>

        <button type="submit">
          <span>Enviar </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
