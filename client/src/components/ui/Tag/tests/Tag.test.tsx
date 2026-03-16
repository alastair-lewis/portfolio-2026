import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Tag} from '../Tag';

describe('Tag', () => {
  it('renders the label text', () => {
    render(<Tag label="React" variant="coral" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('applies the coral variant class', () => {
    render(<Tag label="React" variant="coral" />);
    expect(screen.getByText('React').className).toMatch(/coral/);
  });

  it('applies the teal variant class', () => {
    render(<Tag label="TypeScript" variant="teal" />);
    expect(screen.getByText('TypeScript').className).toMatch(/teal/);
  });

  it('applies the orange variant class', () => {
    render(<Tag label="Node.js" variant="orange" />);
    expect(screen.getByText('Node.js').className).toMatch(/orange/);
  });
});
