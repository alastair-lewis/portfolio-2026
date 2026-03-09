import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Experience} from '../Experience';

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('renders Shopify as a company', () => {
    render(<Experience />);
    expect(screen.getByText('Shopify')).toBeInTheDocument();
  });

  it('renders IBM as a company', () => {
    render(<Experience />);
    expect(screen.getByText('IBM')).toBeInTheDocument();
  });

  it('renders a Shopify link to shopify.com', () => {
    render(<Experience />);
    const link = screen.getByRole('link', {name: 'Shopify'});
    expect(link).toHaveAttribute('href', 'https://shopify.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders role titles', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('renders the section inside an id=experience element', () => {
    render(<Experience />);
    expect(document.getElementById('experience')).toBeInTheDocument();
  });
});
