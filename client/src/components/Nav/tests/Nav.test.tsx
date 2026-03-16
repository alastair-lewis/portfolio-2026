import {describe, it, expect} from 'vitest';
import {render, screen} from '../../../tests/i18n-test-utils';

import {Nav} from '../Nav';

describe('Nav', () => {
  it('renders the logo link', () => {
    render(<Nav />);
    expect(
      screen.getByRole('link', {name: /alastair lewis/i}),
    ).toBeInTheDocument();
  });

  it('renders all nav links with correct hrefs', () => {
    render(<Nav />);
    expect(screen.getByRole('link', {name: 'Projects'})).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', {name: 'Experience'})).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', {name: 'Education'})).toHaveAttribute(
      'href',
      '#education',
    );
    expect(screen.getByRole('link', {name: 'About'})).toHaveAttribute(
      'href',
      '#about',
    );
    expect(screen.getByRole('link', {name: 'Contact'})).toHaveAttribute(
      'href',
      '#contact',
    );
  });

  it('renders with a navigation landmark', () => {
    render(<Nav />);
    expect(
      screen.getByRole('navigation', {name: 'Main navigation'}),
    ).toBeInTheDocument();
  });

  it('renders the language toggle', () => {
    render(<Nav />);
    expect(
      screen.getByRole('group', {name: 'Language selection'}),
    ).toBeInTheDocument();
  });
});
