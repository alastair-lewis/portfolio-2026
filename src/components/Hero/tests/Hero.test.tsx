import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Hero} from '../Hero';

describe('Hero', () => {
  it('renders the name as an h1', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', {level: 1, name: 'Alastair Lewis'})).toBeInTheDocument();
  });

  it('renders the role text', () => {
    render(<Hero />);
    expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
  });

  it('renders the CTA links with correct hrefs', () => {
    render(<Hero />);
    expect(screen.getByRole('link', {name: /see my work/i})).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', {name: /get in touch/i})).toHaveAttribute('href', '#contact');
  });

  it('has a section landmark with accessible label', () => {
    render(<Hero />);
    expect(screen.getByRole('region', {name: /alastair lewis/i})).toBeInTheDocument();
  });
});
