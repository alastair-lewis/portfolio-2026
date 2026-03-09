import type {TagVariant} from '../../../data/types';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  variant: TagVariant;
}

export function Tag({label, variant}: TagProps) {
  return <span className={[styles.tag, styles[variant]].join(' ')}>{label}</span>;
}
