import styles from './LanguageToggle.module.css';

// i18n wiring will be added in a later pass
const LANGUAGES = [
  {code: 'en', label: 'EN'},
  {code: 'fr', label: 'FR'},
] as const;

type LangCode = (typeof LANGUAGES)[number]['code'];

interface LanguageToggleProps {
  current?: LangCode;
  onChange?: (lang: LangCode) => void;
}

export function LanguageToggle({current = 'en', onChange}: LanguageToggleProps) {
  return (
    <div className={styles.toggle} role="group" aria-label="Language selection">
      {LANGUAGES.map(({code, label}) => (
        <button
          key={code}
          type="button"
          className={[styles.option, current === code ? styles.active : ''].join(' ')}
          onClick={() => onChange?.(code)}
          aria-pressed={current === code}
          lang={code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
