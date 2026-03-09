import {education} from '../../data/portfolio';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Education.module.css';

export function Education() {
  return (
    <section id="education" className={styles.section} aria-labelledby="education-heading">
      <div className={styles.inner}>
        <SectionHeader label="Academic Background" title="Education" id="education-heading" />

        <ul className={styles.grid} role="list">
          {education.map((entry) => (
            <li key={entry.institution}>
              <GlassCard className={styles.card}>
                <h3 className={styles.institution}>{entry.institution}</h3>
                <p className={styles.degree}>{entry.degree}</p>
                <p className={styles.years}>{entry.years}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
