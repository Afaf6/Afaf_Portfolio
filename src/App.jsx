import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import BackgroundFX from './components/BackgroundFX/BackgroundFX';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Certifications from './sections/Certifications/Certifications';
import Footer from './sections/Footer/Footer';
import useMouseEffects from './hooks/useMouseEffects';
import './styles/responsive.css';

export default function App() {
  useMouseEffects();

  return (
    <>
      <ScrollProgress />
      <BackgroundFX />
      <Hero />
      <main className="wrap">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
