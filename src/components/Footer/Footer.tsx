import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {year} <strong>Alastair Lewis</strong>
      </p>
      <p className={styles.built}>
        <span>Built with React and TypeScript</span>
      </p>
    </footer>
  );
}
