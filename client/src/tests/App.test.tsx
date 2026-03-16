import {describe, it, expect} from 'vitest';
import {render, screen} from './i18n-test-utils';

import {App} from '../App';

describe('App', () => {
  it('renders the main landmark', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the navigation', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the hero heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
  });

  it('renders all section ids for anchor navigation', () => {
    render(<App />);
    for (const id of [
      'projects',
      'experience',
      'education',
      'about',
      'contact',
    ]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });
});
