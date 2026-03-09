import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Footer} from '../Footer';

describe('Footer', () => {
  it('renders the copyright name', () => {
    render(<Footer />);
    expect(screen.getByText(/Alastair Lewis/)).toBeInTheDocument();
  });

  it('renders the current year', () => {
    render(<Footer />);
    const year = String(new Date().getFullYear());
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders the built-with text', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with React and TypeScript/i)).toBeInTheDocument();
  });

  it('renders a contentinfo landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
