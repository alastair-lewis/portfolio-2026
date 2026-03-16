import {useTranslation} from 'react-i18next';

import {classNames} from '../../../utils/classNames';
import styles from './LanguageToggle.module.css';

const LANGUAGES = [
  {code: 'en', label: 'EN'},
  {code: 'fr', label: 'FR'},
] as const;

export function LanguageToggle() {
  const {i18n} = useTranslation();
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label="Language selection"
      data-active={current === 'fr' ? 'fr' : 'en'}
    >
      {LANGUAGES.map(({code, label}) => (
        <button
          key={code}
          type="button"
          className={classNames(
            styles.option,
            current === code && styles.active,
          )}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          lang={code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
