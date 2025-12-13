import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { scrollReveal } from "./animations/scrollReveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Carousel from "./components/Carousel";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FraseCV from "./components/FraseCV";
import AdminPanel from "./components/AdminPanel";

import "./scss/main.scss";

// ✅ Este componente permite detectar cambios de ruta y re-ejecutar scrollReveal
function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    scrollReveal();
  }, [location.pathname]);

  return (
    <div className="fondo-container">
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Technologies />
              <Carousel />
              <Projects />
              <FraseCV />
              <ContactForm />
            </>
          }
        />

        {/* Admin */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
