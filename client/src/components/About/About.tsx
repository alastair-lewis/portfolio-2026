import {useTranslation} from 'react-i18next';

import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './About.module.css';

export function About() {
  const {t} = useTranslation();

  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          label={t('about.label')}
          title={t('about.title')}
          id="about-heading"
        />

        <GlassCard className={styles.card}>
          <div className={styles.prose}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <aside
            className={styles.stackBox}
            aria-label="Current technology stack"
          >
            <p className={styles.stackLabel}>{t('about.stack_label')}</p>
            <p className={styles.stackText}>{t('about.stack')}</p>
          </aside>
        </GlassCard>
      </div>
    </section>
  );
}
