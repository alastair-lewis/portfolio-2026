import {Button} from '../ui/Button/Button';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <SectionHeader label="Get In Touch" title="Contact" id="contact-heading" />

        <GlassCard className={styles.card}>
          <div className={styles.links}>
            <Button variant="primary" href="mailto:alastair.lewis10@gmail.com">
              Send me an email
            </Button>
            <Button variant="secondary" href="https://github.com/alastair-lewis">
              GitHub
            </Button>
            <Button variant="secondary" href="https://linkedin.com/in/alastair-lewis">
              LinkedIn
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
