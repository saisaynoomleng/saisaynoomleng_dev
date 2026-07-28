import * as z from 'zod';

/**
 * Validate About Schema
 */
export const AboutSchema = z.object({
  name: z.string().min(1, 'About title must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  body: z.array(z.any()).min(1, 'About content is required'),
  city: z.string().min(1, 'City must have at least 1 character'),
  state: z.string().min(1, 'State must have at least 1 charcter'),
  gitHubUrl: z.url().min(1, 'GitHub URL must have at least 1 character'),
  linkedInUrl: z.url().min(1, 'LinkedIn URL must have at least 1 character'),
  leetCodeUrl: z.url().optional(),
  interests: z.array(z.string()).min(1, 'There must be at least 1 interest'),
});
/**
 * Validate About Input Schema
 */
export type AboutInputSchema = z.input<typeof AboutSchema>;
/**
 * Validate About Output Schema
 */
export type AboutOutputSchema = z.output<typeof AboutSchema>;

/**
 * Validate Skills Schema
 */
export const SkillSchema = z.object({
  name: z.string().min(1, 'Skill name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  level: z.coerce.number(),
});
/**
 * Validate Skill Input Schema
 */
export type SkillInputSchema = z.input<typeof SkillSchema>;
/**
 * Validate Skill Output Schema
 */
export type SkillOutputSchema = z.output<typeof SkillSchema>;

/**
 * Validate Blog Schema
 */
export const BlogSchema = z.object({
  name: z.string().min(1, 'Blog title must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  publishedAt: z.string().min(1, 'Must input published date'),
  minRead: z.coerce.number().positive(),
  category: z.string().min(1, 'Category name must have at least 1 character'),
  excerpt: z.string().min(1, 'Excerpt must have at least 1 character'),
  body: z.array(z.any()).min(1, 'Blog content is required'),
  metaTitle: z.string().min(1, 'Meta Title must have at least 1 character'),
  metaDescription: z
    .string()
    .min(1, 'Meta Description must have at least 1 character'),
  ogImageAssetId: z.string().min(1, 'OG image is REQUIRED'),
  ogImageAlt: z
    .string()
    .min(1, 'OG image alternative text is required for screen reader'),
  noIndex: z.boolean(),
  imageAssetId: z.string().min(1, 'Image is REQUIRED'),
  imageAlt: z
    .string()
    .min(1, 'Image Alternative text is required for screen reader'),
});
/**
 * Validate Blog Input Schema
 */
export type BlogInputSchema = z.input<typeof BlogSchema>;
/**
 * Validate Blog Output Schema
 */
export type BlogOutputSchema = z.output<typeof BlogSchema>;

/**
 * Validate Project Schema
 */
export const ProjectSchema = z.object({
  name: z.string().min(1, 'Project name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  body: z.array(z.any()).min(1, 'Project content is required'),
  startedDate: z.string().min(1, 'Project started date is required'),
  endedDate: z.string().min(1, 'Project ended date is required'),
  stacks: z
    .array(z.string().min(1, 'Stack must have at least 1 charcter'))
    .min(1, 'At least 1 stack is required'),
  projectUrl: z.url().min(1, 'Project production URL is required'),
  repoUrl: z.url().min(1, 'Project Repository URL is required'),
  imageAssetId: z.string().min(1, 'Upload an image'),
  imageAlt: z
    .string()
    .min(1, 'Image alternative text is required for screen reader'),
});
/**
 * Validate Project Input Schema
 */
export type ProjectInputSchema = z.input<typeof ProjectSchema>;
/**
 * Validate Project Output Schema
 */
export type ProjectOutputSchema = z.output<typeof ProjectSchema>;

/**
 * Validate History Schema
 */
export const HistorySchema = z.object({
  name: z.string().min(1, 'History Name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  startedDate: z.string().min(1, 'Started date is required'),
  endedDate: z.string().optional(),
  body: z.array(z.any()).min(1, 'Histroy Content is required'),
});
/**
 * Validate History Input Schema
 */
export type HistoryInputSchema = z.input<typeof HistorySchema>;
/**
 * Validate History Output Schema
 */
export type HistoryOutputSchema = z.output<typeof HistorySchema>;

/**
 * Validate Blog Category Schema
 */
export const CategorySchema = z.object({
  name: z.string().min(1, 'Category name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
});
/**
 * Validate Blog Category Input Schema
 */
export type CategoryInputSchema = z.input<typeof CategorySchema>;
/**
 * Validate Blog Category Output Schema
 */
export type CategoryOutputSchema = z.output<typeof CategorySchema>;

/**
 * Validate Certificate Schema
 */
export const CertificateSchema = z.object({
  name: z.string().min(1, 'Certificate name must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  imageAssetId: z.string().min(1, 'Upload an image'),
  imageAlt: z
    .string()
    .min(1, 'Image alternative is required for screen reader'),
  topic: z.array(z.string()).min(1, 'At least 1 topic is required'),
});
/**
 * Validate Certificate Input Schema
 */
export type CertificateInputSchema = z.input<typeof CertificateSchema>;
/**
 * Validate Certificate Output Schema
 */
export type CertificateOutputSchema = z.output<typeof CertificateSchema>;

/**
 * Validate Contact Schema
 */
export const ContactSchema = z.object({
  email: z
    .email('$1: Must be a valid email address')
    .min(1, '$1: Email is required'),
  message: z.string().min(1, '$1: Message must have at least 1 character'),
});
/**
 * Validate Contact Input Schema
 */
export type ContactInputSchema = z.input<typeof ContactSchema>;
/**
 * Validate Contact Output Schema
 */
export type ContactOutputSchema = z.output<typeof ContactSchema>;
