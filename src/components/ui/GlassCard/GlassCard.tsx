import React from 'react';

import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GlassCard({children, className, as: Tag = 'div'}: GlassCardProps) {
  const cls = [styles.card, className].filter(Boolean).join(' ');
  return <Tag className={cls}>{children}</Tag>;
}
