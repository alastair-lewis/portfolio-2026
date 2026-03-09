import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Experience} from '../Experience';
import {experience} from '../../../data/portfolio';

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('renders a heading for every company', () => {
    render(<Experience />);
    for (const entry of experience) {
      expect(screen.getByText(entry.company)).toBeInTheDocument();
    }
  });

  it('renders a linked company name when a url is provided', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.url)) {
      const link = screen.getByRole('link', {name: entry.company});
      expect(link).toHaveAttribute('href', entry.url);
      expect(link).toHaveAttribute('target', '_blank');
    }
  });

  it('renders all role titles', () => {
    render(<Experience />);
    for (const entry of experience) {
      for (const role of entry.roles) {
        expect(screen.getByText(role.title)).toBeInTheDocument();
      }
    }
  });

  it('renders the section inside an id=experience element', () => {
    render(<Experience />);
    expect(document.getElementById('experience')).toBeInTheDocument();
  });
});
