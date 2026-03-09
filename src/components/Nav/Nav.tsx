import {LanguageToggle} from '../ui/LanguageToggle/LanguageToggle';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  {label: 'Projects', href: '#projects'},
  {label: 'Experience', href: '#experience'},
  {label: 'Education', href: '#education'},
  {label: 'About', href: '#about'},
  {label: 'Contact', href: '#contact'},
] as const;

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Alastair Lewis -- home">
          AL
        </a>

        <ul className={styles.links} role="list">
          {NAV_ITEMS.map(({label, href}) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {label}
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
