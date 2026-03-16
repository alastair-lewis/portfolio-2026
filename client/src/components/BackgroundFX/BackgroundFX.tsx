import {classNames} from '../../utils/classNames';
import styles from './BackgroundFX.module.css';

const BUBBLE_COUNT = 8;

export function BackgroundFX() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={classNames(styles.blob, styles.blob1)} />
      <div className={classNames(styles.blob, styles.blob2)} />
      <div className={classNames(styles.blob, styles.blob3)} />
      <div className={styles.bubbles}>
        {Array.from({length: BUBBLE_COUNT}, (_, i) => (
          <div key={i} className={styles.bubble} />
        ))}
      </div>
    </div>
  );
}
