import env from '../lib/env';

export const trustedOrigins = () => {
  return env.ALLOWED_ORIGINS.split(',');
};
