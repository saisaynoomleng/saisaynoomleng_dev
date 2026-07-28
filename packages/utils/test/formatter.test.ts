import { describe, it, expect } from 'vitest';
import {
  formatDate,
  formatFileSize,
  formatTitle,
  formatYear,
  replaceDashWithSpace,
  sanitySlugifier,
} from '../src';

describe('format title', () => {
  it('should return a string with all word capitalize', () => {
    expect(formatTitle('hi hi')).toBe('Hi Hi');
    expect(formatTitle('         hi               hi               ')).toBe(
      'Hi Hi',
    );
  });
});

describe('format year', () => {
  it('should return year on a given date', () => {
    expect(formatYear('1996/09/24')).toBe(1996);
    expect(formatYear('Aug 21, 2025')).toBe(2025);
  });
});

describe('format Date', () => {
  it('should return a local date string on a given date', () => {
    expect(formatDate('1996/09/24')).toBe('Sep 24, 1996');
    expect(formatDate('1996-09-24T04:00:00.000Z')).toBe('Sep 24, 1996');
  });
});

describe('replace dash', () => {
  it('should replace dash with white space', () => {
    expect(replaceDashWithSpace('hello-from-the-other-side')).toBe(
      'hello from the other side',
    );
  });
});

describe('sanity slugifier', () => {
  it('should slugify the sentance as sanity slug', () => {
    expect(sanitySlugifier('My Portfolio  ProJeCt$')).toBe(
      'my-portfolio-project',
    );
  });
});

describe('format file size', () => {
  it('should return byte to string', () => {
    expect(formatFileSize(1)).toBe('1B');
    expect(formatFileSize(1025)).toBe('1.00KB');
    expect(formatFileSize(9999999)).toBe('9.54MB');
    expect(formatFileSize(9999999999)).toBe('9.31GB');
  });
});
