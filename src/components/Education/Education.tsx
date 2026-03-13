import {useTranslation} from 'react-i18next';

import {education} from '../../data/portfolio';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Education.module.css';

const DEGREE_KEYS: Record<string, string> = {
  "Queen's University": 'education.queens_degree',
  'Crescent School': 'education.crescent_degree',
};

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
          {education.map((entry) => (
            <li key={entry.institution}>
              <GlassCard className={styles.card}>
                <h3 className={styles.institution}>{entry.institution}</h3>
                <p className={styles.degree}>
                  {DEGREE_KEYS[entry.institution]
                    ? t(DEGREE_KEYS[entry.institution])
                    : entry.degree}
                </p>
                <p className={styles.years}>{entry.years}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
