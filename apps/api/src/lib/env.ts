import dotenv from 'dotenv';
import * as z from 'zod';

process.env.APP_STAGE = process.env.APP_STAGE ?? 'dev';

const isDevelopment = process.env.APP_STAGE === 'dev';

dotenv.config({
  path: isDevelopment ? '.env' : '.env.test',
});

const schema = z.object({
  APP_STAGE: z.enum(['prod', 'dev', 'test']).default('dev'),
  NODE_ENV: z
    .enum(['production', 'development', 'test'])
    .default('development'),

  DATABASE_URL: z
    .string()
    .min(1, 'Database URL must have at least 1 character'),

  PORT: z.coerce.number().default(4000),

  ALLOWED_ORIGINS: z
    .string()
    .min(1, 'Allowed origins must set for resource sharing'),

  RATE_LIMIT_WINDOW: z.coerce.number(),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().max(100),
  BCRYPT_ROUNDS: z.coerce.number().min(10).max(20).default(12),

  BETTER_AUTH_SECRET: z
    .string()
    .min(1, 'Auth secret must have at least 1 character'),
  BETTER_AUTH_URL: z.url('Must be a valid URL'),

  LOG_LEVEL: z.string().min(1),
});

type EnvSchema = z.infer<typeof schema>;

let env: EnvSchema;

try {
  env = schema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log('Invalid environment variables');

    error.issues.forEach((e) => {
      const message = e.message;
      const path = e.path.join('.');

      console.log(`${path}: ${message}`);
    });

    process.exit(1);
  }

  throw error;
}

export default env;

export const isProd = () => process.env.APP_STAGE === 'prod';
export const isDev = () => process.env.APP_STAGE === 'dev';
export const isTest = () => process.env.APP_STAGE === 'test';
