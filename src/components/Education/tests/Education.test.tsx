import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Education} from '../Education';
import {education} from '../../../data/portfolio';

describe('Education', () => {
  it('renders the section heading', () => {
    render(<Education />);
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
  });

  it('renders a list item for every education entry', () => {
    render(<Education />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(education.length);
  });

  it("renders Queen's University", () => {
    render(<Education />);
    expect(screen.getByText("Queen's University")).toBeInTheDocument();
  });

  it('renders Crescent School', () => {
    render(<Education />);
    expect(screen.getByText('Crescent School')).toBeInTheDocument();
  });

  it('renders years for each entry', () => {
    render(<Education />);
    expect(screen.getByText('2012 -- 2016')).toBeInTheDocument();
    expect(screen.getByText('2008 -- 2012')).toBeInTheDocument();
  });

  it('renders the section inside an id=education element', () => {
    render(<Education />);
    expect(document.getElementById('education')).toBeInTheDocument();
  });
});
