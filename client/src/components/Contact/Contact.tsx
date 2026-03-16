import {useTranslation} from 'react-i18next';

import {Button} from '../ui/Button/Button';
import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './Contact.module.css';

export function Contact() {
  const {t} = useTranslation();

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <SectionHeader
          label={t('contact.label')}
          title={t('contact.title')}
          id="contact-heading"
        />

        <GlassCard className={styles.card}>
          <div className={styles.links}>
            <Button variant="primary" href="mailto:alastair.lewis10@gmail.com">
              {t('contact.email_cta')}
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/alastair-lewis"
            >
              {t('contact.github_cta')}
            </Button>
            <Button
              variant="secondary"
              href="https://linkedin.com/in/alastair-lewis"
            >
              {t('contact.linkedin_cta')}
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
