import {describe, it, expect} from 'vitest';
import {loremIpsum} from '../loremIpsum';

describe('loremIpsum', () => {
  it('generates a string with the requested word count', () => {
    const result = loremIpsum(5);
    const words = result.replace(/\.$/, '').split(' ');
    expect(words).toHaveLength(5);
  });

  it('capitalizes the first letter', () => {
    const result = loremIpsum(3);
    expect(result[0]).toBe(result[0].toUpperCase());
  });

  it('ends with a period', () => {
    const result = loremIpsum(4);
    expect(result.endsWith('.')).toBe(true);
  });

  it('wraps around when word count exceeds vocabulary', () => {
    const result = loremIpsum(100);
    const words = result.replace(/\.$/, '').split(' ');
    expect(words).toHaveLength(100);
  });
});
