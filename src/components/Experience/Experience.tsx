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

              <div className={styles.companyHeader}>
                {entry.logoFile && (
                  entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={entry.company}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}assets/images/${entry.logoFile}`}
                        alt=""
                        className={styles.companyLogo}
                        height={28}
                      />
                    </a>
                  ) : (
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/${entry.logoFile}`}
                      alt={entry.company}
                      className={styles.companyLogo}
                      height={28}
                    />
                  )
                )}
              </div>

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
