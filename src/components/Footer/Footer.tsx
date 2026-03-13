import {useTranslation} from 'react-i18next';

import styles from './Footer.module.css';

export function Footer() {
  const {t} = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {year} <strong>{t('footer.copy')}</strong>
      </p>
      <p className={styles.built}>
        <span>{t('footer.built_with')}</span>
      </p>
    </footer>
  );
}
