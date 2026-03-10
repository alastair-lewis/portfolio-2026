import {projects} from '../../data/portfolio';
import {classNames} from '../../utils/classNames';
import {Button} from '../ui/Button/Button';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import {Tag} from '../ui/Tag/Tag';
import {Tooltip} from '../ui/Tooltip/Tooltip';
import styles from './Projects.module.css';

const ACCENT_CLASS: Record<1 | 2 | 3, string> = {
  1: styles.accent1,
  2: styles.accent2,
  3: styles.accent3,
};

export function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <SectionHeader label="Concept Projects" title="Things I've Built" id="projects-heading" />

        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.id}>
              <GlassCard className={styles.card} as="article">
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.role}>{project.role}</p>
                  </div>
                  {project.logoFile ? (
                    <img
                      src={`${import.meta.env.BASE_URL}assets/images/${project.logoFile}`}
                      alt=""
                      className={styles.logo}
                      height={40}
                    />
                  ) : (
                    <div
                      className={classNames(styles.accent, ACCENT_CLASS[project.accentVariant])}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {project.comingSoon ? (
                  <Tooltip label="In progress" className={styles.redacted}>
                    <div className={styles.desc} aria-hidden="true">
                      {project.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </Tooltip>
                ) : (
                  <div className={styles.desc}>
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Tag key={tag.label} label={tag.label} variant={tag.variant} />
                  ))}
                </div>

                {project.url && (
                  <div className={styles.cardFooter}>
                    <Button variant="secondary" href={project.url}>
                      View project
                    </Button>
                    {project.urlNote && (
                      <span className={styles.urlNote}>{project.urlNote}</span>
                    )}
                  </div>
                )}
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
