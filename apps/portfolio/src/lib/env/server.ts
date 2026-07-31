import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    SANITY_READ_TOKEN: z
      .string()
      .min(1, 'Sanity READ TOKEN must have at least 1 character'),
    SANITY_WRITE_TOKEN: z
      .string()
      .min(1, 'Sanity WRITE TOKEN must have at least 1 character'),
  },
  runtimeEnv: {
    SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
    SANITY_WRITE_TOKEN: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  },
});
