import {useTranslation} from 'react-i18next';

import {projects} from '../../data/portfolio';
import {classNames} from '../../utils/classNames';
import {loremIpsum} from '../../utils/loremIpsum';
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
  const {t} = useTranslation();

  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          label={t('projects.label')}
          title={t('projects.title')}
          id="projects-heading"
        />

        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.id}>
              <GlassCard className={styles.card} as="article">
                <div className={styles.cardTop}>
                  <div
                    className={classNames(
                      project.comingSoon && styles.redactedTitle,
                    )}
                  >
                    <h3 className={styles.cardTitle}>
                      {project.comingSoon
                        ? loremIpsum(3)
                        : t(`projects_data.${project.id}.title`)}
                    </h3>
                    <p className={styles.role}>
                      {project.comingSoon
                        ? loremIpsum(5)
                        : t(`projects_data.${project.id}.role`)}
                    </p>
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
                      className={classNames(
                        styles.accent,
                        ACCENT_CLASS[project.accentVariant],
                      )}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {project.comingSoon ? (
                  <Tooltip
                    label={t('projects.in_progress')}
                    className={styles.redacted}
                  >
                    <div className={styles.desc} aria-hidden="true">
                      <p>{loremIpsum(20)}</p>
                      <p>{loremIpsum(15)}</p>
                    </div>
                  </Tooltip>
                ) : (
                  <div className={styles.desc}>
                    {project.description.map((_para, i) => (
                      <p key={i}>
                        {t(`projects_data.${project.id}.desc_${i}`)}
                      </p>
                    ))}
                  </div>
                )}

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag.label}
                      label={tag.label}
                      variant={tag.variant}
                    />
                  ))}
                </div>

                {project.url && (
                  <div className={styles.cardFooter}>
                    <Button variant="secondary" href={project.url}>
                      {t('projects.cta')}
                    </Button>
                    {project.urlNote && (
                      <span className={styles.urlNote}>
                        {t(`projects_data.${project.id}.url_note`)}
                      </span>
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
