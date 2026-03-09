import {About} from './components/About/About';
import {BackgroundFX} from './components/BackgroundFX/BackgroundFX';
import {Contact} from './components/Contact/Contact';
import {Education} from './components/Education/Education';
import {Experience} from './components/Experience/Experience';
import {Footer} from './components/Footer/Footer';
import {Hero} from './components/Hero/Hero';
import {Nav} from './components/Nav/Nav';
import {Projects} from './components/Projects/Projects';

export function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
