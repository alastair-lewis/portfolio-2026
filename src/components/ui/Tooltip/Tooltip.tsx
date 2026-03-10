import React from 'react';

import {classNames} from '../../../utils/classNames';
import styles from './Tooltip.module.css';

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({label, children, className}: TooltipProps) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {children}
      <span className={styles.label} aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
