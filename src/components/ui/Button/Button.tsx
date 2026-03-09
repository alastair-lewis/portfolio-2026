import React from 'react';

import {classNames} from '../../../utils/classNames';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  /** Passed to <a> targets — defaults to _blank for external links */
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const cls = classNames(styles.button, styles[variant], className);

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
