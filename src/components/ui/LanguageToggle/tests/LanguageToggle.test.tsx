import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '../../../../tests/i18n-test-utils';

import {LanguageToggle} from '../LanguageToggle';

describe('LanguageToggle', () => {
  it('renders EN and FR buttons', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', {name: 'EN'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'FR'})).toBeInTheDocument();
  });

  it('marks EN as active by default', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', {name: 'EN'})).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', {name: 'FR'})).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('switches language when FR is clicked', () => {
    render(<LanguageToggle />);
    fireEvent.click(screen.getByRole('button', {name: 'FR'}));
    expect(screen.getByRole('button', {name: 'FR'})).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', {name: 'EN'})).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('has a group role with accessible label', () => {
    render(<LanguageToggle />);
    expect(
      screen.getByRole('group', {name: 'Language selection'}),
    ).toBeInTheDocument();
  });
});
