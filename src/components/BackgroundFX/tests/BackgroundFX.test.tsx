import {describe, it, expect} from 'vitest';
import {render} from '@testing-library/react';

import {BackgroundFX} from '../BackgroundFX';

describe('BackgroundFX', () => {
  it('renders without crashing', () => {
    const {container} = render(<BackgroundFX />);
    expect(container.firstChild).toBeTruthy();
  });

  it('has aria-hidden so it is invisible to assistive technology', () => {
    const {container} = render(<BackgroundFX />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});
