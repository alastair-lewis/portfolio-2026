import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Projects} from '../Projects';
import {projects} from '../../../data/portfolio';

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('renders a card for every project', () => {
    render(<Projects />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(projects.length);
  });

  it('renders all project titles', () => {
    render(<Projects />);
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it('renders the section inside an id=projects element', () => {
    render(<Projects />);
    expect(document.getElementById('projects')).toBeInTheDocument();
  });
});
