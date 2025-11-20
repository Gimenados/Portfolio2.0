import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8z1k2gy',       
      'template_r7xr2bu',      
      form.current,
      'hdWt1tHbXtLBrkI4Y'          // 👉 tu PUBLIC KEY
    )
    .then(() => {
      alert("Mensaje enviado con éxito ✔");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Hubo un error ❌");
    });
  };

  return (
    <section className="container" id="contacto">
      <h2 className="about-title">Contacto</h2>

      <form ref={form} onSubmit={sendEmail} className="form-glow">
        <h4 className="form-subtitle">
          ¿Querés contactarme? Escribime acá abajo 👇
        </h4>

        <input
          type="text"
          name="from_name"
          placeholder="Nombre y apellido"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Correo electrónico"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Mensaje"
          required
        ></textarea>

        <button type="submit">
          <span>Enviar </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 ..."/>
          </svg>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

