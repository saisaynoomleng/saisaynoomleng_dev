import * as t from 'drizzle-orm/pg-core';
import { contactStatus, timestamps } from './schema-helper';

export const ContactTable = t.pgTable('contacts', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  email: t.varchar('email', { length: 255 }).notNull(),
  message: t.text('message').notNull(),
  status: contactStatus('status').notNull().default('new'),
  ...timestamps,
});
