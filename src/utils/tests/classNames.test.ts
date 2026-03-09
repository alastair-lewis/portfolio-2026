import {describe, it, expect} from 'vitest';

import {classNames} from '../classNames';

describe('classNames', () => {
  it('joins multiple class strings', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar');
  });

  it('filters out falsy values', () => {
    expect(classNames('foo', undefined, null, false, 'bar')).toBe('foo bar');
  });

  it('returns empty string when all values are falsy', () => {
    expect(classNames(undefined, null, false)).toBe('');
  });

  it('returns single class unchanged', () => {
    expect(classNames('foo')).toBe('foo');
  });

  it('handles conditional classes', () => {
    const active = true;
    const disabled = false;
    expect(classNames('base', active && 'active', disabled && 'disabled')).toBe('base active');
  });
});
