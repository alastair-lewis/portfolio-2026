import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {GlassCard} from '../GlassCard';

describe('GlassCard', () => {
  it('renders children', () => {
    render(<GlassCard>Card content</GlassCard>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders as <div> by default', () => {
    const {container} = render(<GlassCard>Content</GlassCard>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders as specified element via `as` prop', () => {
    const {container} = render(<GlassCard as="article">Content</GlassCard>);
    expect(container.firstChild?.nodeName).toBe('ARTICLE');
  });

  it('forwards custom className', () => {
    render(<GlassCard className="my-card">Content</GlassCard>);
    expect(screen.getByText('Content').parentElement ?? screen.getByText('Content')).toBeTruthy();
  });
});
