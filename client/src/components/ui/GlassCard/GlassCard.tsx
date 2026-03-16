import React from 'react';

import {classNames} from '../../../utils/classNames';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GlassCard({children, className, as: Tag = 'div'}: GlassCardProps) {
  const cls = classNames(styles.card, className);
  return <Tag className={cls}>{children}</Tag>;
}
