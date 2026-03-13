import {useTranslation} from 'react-i18next';

import {Button} from '../ui/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  const {t} = useTranslation();

  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <h1 id="hero-heading" className={styles.name}>
          {t('hero.name')}
        </h1>

        <p className={styles.role}>{t('hero.role')}</p>
        <p className={styles.tagline}>{t('hero.tagline')}</p>

        <div className={styles.ctas}>
          <Button variant="primary" href="#projects">
            {t('hero.cta_work')}
          </Button>
          <Button variant="secondary" href="#contact">
            {t('hero.cta_contact')}
          </Button>
        </div>
      </div>
    </section>
  );
}
