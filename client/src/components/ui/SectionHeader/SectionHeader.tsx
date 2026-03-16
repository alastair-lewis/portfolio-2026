import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  title: string;
  /** Should match the parent section's id for anchor linking */
  id?: string;
}

export function SectionHeader({label, title, id}: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.label}>{label}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </header>
  );
}
