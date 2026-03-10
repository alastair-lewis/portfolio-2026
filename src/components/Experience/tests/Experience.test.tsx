import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Experience} from '../Experience';
import {experience} from '../../../data/portfolio';

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('renders a logo link for every company with a logoFile and url', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.logoFile && e.url)) {
      expect(screen.getByRole('link', {name: entry.company})).toBeInTheDocument();
    }
  });

  it('logo link points to the company url and opens in a new tab', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.logoFile && e.url)) {
      const link = screen.getByRole('link', {name: entry.company});
      expect(link).toHaveAttribute('href', entry.url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('logo link aria-label identifies the company', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.logoFile && e.url)) {
      const link = screen.getByRole('link', {name: entry.company});
      expect(link).toHaveAttribute('aria-label', entry.company);
    }
  });

  it('logo image inside a link has empty alt (decorative)', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.logoFile && e.url)) {
      const link = screen.getByRole('link', {name: entry.company});
      const img = link.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', '');
    }
  });

  it('logo image src points to the correct asset', () => {
    render(<Experience />);
    for (const entry of experience.filter((e) => e.logoFile && e.url)) {
      const link = screen.getByRole('link', {name: entry.company});
      const img = link.querySelector('img');
      expect(img).toHaveAttribute('src', expect.stringContaining(entry.logoFile!));
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
