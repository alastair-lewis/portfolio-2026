import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {About} from '../About';

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', {level: 2, name: 'About Me'})).toBeInTheDocument();
  });

  it('renders the stack aside with accessible label', () => {
    render(<About />);
    expect(
      screen.getByRole('complementary', {name: /current technology stack/i}),
    ).toBeInTheDocument();
  });

  it('renders stack technologies', () => {
    render(<About />);
    expect(screen.getByText(/React, Angular, TypeScript/)).toBeInTheDocument();
  });

  it('renders the section inside an id=about element', () => {
    render(<About />);
    expect(document.getElementById('about')).toBeInTheDocument();
  });
});
