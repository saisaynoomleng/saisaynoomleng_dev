/**
 * Return the number in MegaBytes Unit
 * @param size number
 * @returns number
 */
export const maximumImageSize = (size: number): number => {
  return size * 1024 * 1024;
};

/**
 * Verify the image type to be accepted tyep
 */
export const allowImageTypes = [
  'image/avif',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'image/gif',
  'image/svg',
  'image/ai',
  'image/eps',
];
