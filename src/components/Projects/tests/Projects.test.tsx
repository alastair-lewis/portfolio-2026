import {describe, it, expect} from 'vitest';
import {render, screen} from '../../../tests/i18n-test-utils';

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

  it('renders a linked project name when a url is provided', () => {
    render(<Projects />);
    const linkedProjects = projects.filter((p) => p.url);
    const links = screen.getAllByRole('link', {name: /view project/i});
    expect(links).toHaveLength(linkedProjects.length);
    for (const project of linkedProjects) {
      const link = links.find((el) => el.getAttribute('href') === project.url);
      expect(link).toBeDefined();
      expect(link).toHaveAttribute('target', '_blank');
    }
  });

  it('renders a logo image for every project with a logoFile', () => {
    render(<Projects />);
    const imgs = Array.from(document.querySelectorAll('img'));
    for (const project of projects.filter((p) => p.logoFile)) {
      const img = imgs.find((el) =>
        el.getAttribute('src')?.includes(project.logoFile),
      );
      expect(img).toBeInTheDocument();
    }
  });

  it('renders a urlNote alongside the view project link when present', () => {
    render(<Projects />);
    for (const project of projects.filter((p) => p.urlNote)) {
      expect(screen.getByText(project.urlNote!)).toBeInTheDocument();
    }
  });

  it('renders the section inside an id=projects element', () => {
    render(<Projects />);
    expect(document.getElementById('projects')).toBeInTheDocument();
  });
});
