import {experience} from '../../data/portfolio';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <SectionHeader label="Work History" title="Where I've Worked" id="experience-heading" />

        <ol className={styles.timeline}>
          {experience.map((entry) => (
            <li key={entry.company} className={styles.company}>
              <div className={styles.companyDot} aria-hidden="true" />

              <h3 className={styles.companyName}>
                {entry.url ? (
                  <a
                    href={entry.url}
                    className={styles.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.company}
                  </a>
                ) : (
                  entry.company
                )}
              </h3>

              {entry.roles.map((role) => (
                <GlassCard key={role.title} className={styles.roleCard}>
                  <div className={styles.roleHeader}>
                    <h4 className={styles.roleTitle}>{role.title}</h4>
                    <div className={styles.roleMeta}>
                      <span className={styles.period}>{role.period}</span>
                      {role.location && <span className={styles.location}>{role.location}</span>}
                    </div>
                  </div>

                  <ul className={styles.bullets}>
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className={styles.bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>


                </GlassCard>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
