import {Button} from '../ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <h1 id="hero-heading" className={styles.name}>
          Alastair Lewis
        </h1>

        <p className={styles.role}>Senior Software Engineer</p>
        <p className={styles.tagline}>
          Frontend architecture, accessibility, and building things that scale.
        </p>

        <div className={styles.ctas}>
          <Button variant="primary" href="#projects">
            See my work
          </Button>
          <Button variant="secondary" href="#contact">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
