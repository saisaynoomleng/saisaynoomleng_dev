import { describe, it, expect } from 'vitest';
import { maximumImageSize } from '../src/helpers';

describe('maximum image size', () => {
  it('should return the bytes in megabyte unit', () => {
    expect(maximumImageSize(1)).toBe(1048576);
  });
});
