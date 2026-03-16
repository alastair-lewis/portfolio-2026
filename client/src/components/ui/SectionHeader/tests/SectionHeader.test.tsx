import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {SectionHeader} from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders the label', () => {
    render(<SectionHeader label="Work History" title="Where I've Worked" />);
    expect(screen.getByText('Work History')).toBeInTheDocument();
  });

  it('renders the title as an h2', () => {
    render(<SectionHeader label="Label" title="My Title" />);
    expect(screen.getByRole('heading', {level: 2, name: 'My Title'})).toBeInTheDocument();
  });

  it('sets id on the h2 when provided', () => {
    render(<SectionHeader label="Label" title="Title" id="experience-heading" />);
    expect(screen.getByRole('heading', {level: 2})).toHaveAttribute('id', 'experience-heading');
  });

  it('does not set id on the h2 when omitted', () => {
    render(<SectionHeader label="Label" title="Title" />);
    expect(screen.getByRole('heading', {level: 2})).not.toHaveAttribute('id');
  });
});
