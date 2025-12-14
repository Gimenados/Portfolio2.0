let observer;

export const scrollReveal = () => {
  // limpiamos observers anteriores (cambio de ruta)
  if (observer) observer.disconnect();

  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target); // 👈 clave
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
};
