import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
