import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import db from '../db';
import env from './env';
import { trustedOrigins } from '../utils/helper';

export const auth = betterAuth({
  appName: 'saisaynoomleng_dev',

  database: drizzleAdapter(db, {
    provider: 'pg',
  }),

  baseURL: {
    allowedHosts: ['www.snoomleng.com', 'snoomleng.com', '*.snoomleng.com'],
    protocol: 'http',
    fallback: env.BETTER_AUTH_URL,
  },

  secret: env.BETTER_AUTH_SECRET,

  trustedOrigins: trustedOrigins(),

  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
    resetPasswordTokenExpiresIn: 3600,
  },

  advanced: {
    useSecureCookies: false,
    database: {
      generateId: 'uuid',
    },
  },

  experimental: {
    joins: false,
  },
});
