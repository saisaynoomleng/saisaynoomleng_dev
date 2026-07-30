import 'dotenv/config';
import { relations } from './relations';
import { Pool } from 'pg';
import env, { isProd } from '../lib/env';
import { remember } from '@epic-web/remember';
import { drizzle } from 'drizzle-orm/node-postgres';

const createPool = () => {
  return new Pool({
    connectionString: env.DATABASE_URL,
    min: 2,
    max: 20,
    ssl: {
      rejectUnauthorized: false,
    },
    idleTimeoutMillis: 30000,
  });
};

let client: Pool;

if (isProd()) {
  client = createPool();
} else {
  client = remember('dbPool', () => createPool());
  client.on('error', (err) => {
    console.log('PG Pool Error', err);
  });
}

const db = drizzle({ client, relations, logger: true });
export default db;
export * from './schema';
