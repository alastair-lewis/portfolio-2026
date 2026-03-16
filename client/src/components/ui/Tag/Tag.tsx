import type {TagVariant} from '../../../data/types';
import {classNames} from '../../../utils/classNames';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  variant: TagVariant;
}

export function Tag({label, variant}: TagProps) {
  return <span className={classNames(styles.tag, styles[variant])}>{label}</span>;
}
