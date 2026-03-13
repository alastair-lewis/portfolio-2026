import {useTranslation} from 'react-i18next';

import {LanguageToggle} from '../ui/LanguageToggle/LanguageToggle';
import styles from './Nav.module.css';

const NAV_KEYS = [
  {key: 'nav.projects', href: '#projects'},
  {key: 'nav.experience', href: '#experience'},
  {key: 'nav.education', href: '#education'},
  {key: 'nav.about', href: '#about'},
  {key: 'nav.contact', href: '#contact'},
] as const;

export function Nav() {
  const {t} = useTranslation();

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Alastair Lewis -- home">
          AL
        </a>

        <ul className={styles.links} role="list">
          {NAV_KEYS.map(({key, href}) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
