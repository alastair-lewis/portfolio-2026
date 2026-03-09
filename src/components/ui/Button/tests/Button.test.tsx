import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';

import {Button} from '../Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', {name: 'Click me'})).toBeInTheDocument();
  });

  it('renders as <a> when href is provided', () => {
    render(<Button href="#projects">Projects</Button>);
    const link = screen.getByRole('link', {name: 'Projects'});
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('sets target=_blank and rel for external hrefs', () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not set target=_blank for internal hrefs', () => {
    render(<Button href="#about">About</Button>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
  });

  it('calls onClick when clicked', () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Go</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('applies primary class by default', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole('button').className).toMatch(/primary/);
  });

  it('applies secondary class when variant=secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button').className).toMatch(/secondary/);
  });

  it('forwards custom className', () => {
    render(<Button className="custom">Styled</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom');
  });
});
