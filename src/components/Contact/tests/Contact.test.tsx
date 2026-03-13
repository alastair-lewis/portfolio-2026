import {describe, it, expect} from 'vitest';
import {render, screen} from '../../../tests/i18n-test-utils';

import {Contact} from '../Contact';

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />);
    expect(
      screen.getByRole('heading', {level: 2, name: 'Contact'}),
    ).toBeInTheDocument();
  });

  it('renders the email CTA link', () => {
    render(<Contact />);
    expect(
      screen.getByRole('link', {name: /send me an email/i}),
    ).toHaveAttribute('href', 'mailto:alastair.lewis10@gmail.com');
  });

  it('renders the GitHub link', () => {
    render(<Contact />);
    expect(screen.getByRole('link', {name: /github/i})).toHaveAttribute(
      'href',
      'https://github.com/alastair-lewis',
    );
  });

  it('renders the LinkedIn link', () => {
    render(<Contact />);
    expect(screen.getByRole('link', {name: /linkedin/i})).toHaveAttribute(
      'href',
      'https://linkedin.com/in/alastair-lewis',
    );
  });

  it('renders the section inside an id=contact element', () => {
    render(<Contact />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});
