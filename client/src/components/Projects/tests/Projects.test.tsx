import {describe, it, expect} from 'vitest';
import {render, screen} from '../../../tests/i18n-test-utils';

import {Projects} from '../Projects';
import {projects} from '../../../data/portfolio';

const visibleProjects = projects.filter((p) => !p.comingSoon);

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

  it('renders titles for visible projects', () => {
    render(<Projects />);
    for (const project of visibleProjects) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it('renders lorem ipsum for in-progress projects', () => {
    render(<Projects />);
    const comingSoonProject = projects.find((p) => p.comingSoon);
    if (!comingSoonProject) return;

    const redactedTitle = document.querySelector('[class*="redactedTitle"]');
    expect(redactedTitle).toBeInTheDocument();
    expect(redactedTitle?.textContent).toMatch(/lorem ipsum/i);
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

  it('renders a dot indicator for each project', () => {
    render(<Projects />);
    const dots = screen.getAllByRole('tab');
    expect(dots).toHaveLength(projects.length);
  });
});
