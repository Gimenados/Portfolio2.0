import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'

import './scss/main.scss';

function App() {
  return (
    <div className="fondo-container">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Carousel />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
