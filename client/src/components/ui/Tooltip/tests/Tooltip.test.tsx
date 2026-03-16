import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';

import {Tooltip} from '../Tooltip';

describe('Tooltip', () => {
  it('renders children', () => {
    render(<Tooltip label="In progress"><p>Content</p></Tooltip>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders the label text', () => {
    render(<Tooltip label="In progress"><p>Content</p></Tooltip>);
    expect(screen.getByText('In progress')).toBeInTheDocument();
  });

  it('forwards a custom className to the wrapper', () => {
    const {container} = render(<Tooltip label="tip" className="custom"><p>x</p></Tooltip>);
    expect(container.firstChild).toHaveClass('custom');
  });
});
