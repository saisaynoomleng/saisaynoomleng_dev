/**
 * API Response Data Shape
 */
export type ActionRespone<T> = {
  success: false;
  message: string;
  field?: keyof T;
};

/**
 * Image Data Shape
 */
export type Media = {
  imageUrl: string;
  imageAlt: string;
};

/**
 * Call to Action Data Shape
 */
export type CallToAction = {
  label: string;
  href: string;
};
