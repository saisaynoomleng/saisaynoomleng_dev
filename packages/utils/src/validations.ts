import * as z from 'zod';

export const AboutSchema = z.object({
  name: z.string().min(1, 'About title must have at least 1 character'),
  slug: z.string().min(1, 'Slug must have at least 1 character'),
  body: z.array(z.any()),
  city: z.string().min(1, 'City must have at least 1 character'),
  state: z.string().min(1, 'State must have at least 1 charcter'),
});
