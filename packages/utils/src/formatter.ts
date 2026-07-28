/**
 * Capitalize every word in a sentance
 * @param title string
 * @returns string
 */
export const formatTitle = (title: string): string => {
  return title
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Extract the year from a Date
 * @param year Date | string
 * @returns number
 */
export const formatYear = (year: Date | string): number => {
  return new Date(year).getFullYear();
};

/**
 * Return local date string
 * @param date Date | string
 * @returns string
 */
export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString(undefined, {
    day: '2-digit',
    year: 'numeric',
    month: 'short',
  });
};

/**
 * Output the input by replacing all the dash with white space
 * @param input string
 * @returns string
 */
export const replaceDashWithSpace = (input: string): string => {
  return input.trim().replace(/-/g, ' ');
};

/**
 * Return slugified string that sanity slug accepts, maximum return characters cannot exceeds 200
 * @param input string
 * @returns string
 */
export const sanitySlugifier = (input: string): string => {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/-+/g, '-')
    .slice(0, 200);
};

/**
 * Format the file size in byte into string
 * @param byte number
 * @returns string
 */
export const formatFileSize = (byte: number): string => {
  if (byte < 1024) {
    return `${byte}B`;
  }

  if (byte < 1024 * 1024) {
    return `${(byte / 1024).toFixed(2)}KB`;
  }

  if (byte < 1024 * 1024 * 1024) {
    return `${(byte / 1024 / 1024).toFixed(2)}MB`;
  }

  return `${(byte / 1024 / 1024 / 1024).toFixed(2)}GB`;
};
