import {useTranslation} from 'react-i18next';

import {education} from '../../data/portfolio';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Education.module.css';

export function Education() {
  const {t} = useTranslation();

  return (
    <section
      id="education"
      className={styles.section}
      aria-labelledby="education-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          label={t('education.label')}
          title={t('education.title')}
          id="education-heading"
        />

        <ul className={styles.grid} role="list">
          <li>
            <GlassCard className={styles.card}>
              <h3 className={styles.institution}>
                {education[0].institution}
              </h3>
              <p className={styles.degree}>
                {t('education.queens_degree')}
              </p>
              <p className={styles.years}>{education[0].years}</p>
            </GlassCard>
          </li>
          <li>
            <GlassCard className={styles.card}>
              <h3 className={styles.institution}>
                {education[1].institution}
              </h3>
              <p className={styles.degree}>
                {t('education.crescent_degree')}
              </p>
              <p className={styles.years}>{education[1].years}</p>
            </GlassCard>
          </li>
        </ul>
      </div>
    </section>
  );
}
