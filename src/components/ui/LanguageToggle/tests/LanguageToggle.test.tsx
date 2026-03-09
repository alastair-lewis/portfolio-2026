import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';

import {LanguageToggle} from '../LanguageToggle';

describe('LanguageToggle', () => {
  it('renders EN and FR buttons', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', {name: 'EN'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'FR'})).toBeInTheDocument();
  });

  it('marks EN as active by default', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', {name: 'EN'})).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', {name: 'FR'})).toHaveAttribute('aria-pressed', 'false');
  });

  it('marks FR as active when current=fr', () => {
    render(<LanguageToggle current="fr" />);
    expect(screen.getByRole('button', {name: 'FR'})).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', {name: 'EN'})).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onChange with the selected language code', () => {
    const onChange = vi.fn();
    render(<LanguageToggle onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', {name: 'FR'}));
    expect(onChange).toHaveBeenCalledWith('fr');
  });

  it('has a group role with accessible label', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('group', {name: 'Language selection'})).toBeInTheDocument();
  });
});
