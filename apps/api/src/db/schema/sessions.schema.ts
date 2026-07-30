import * as t from 'drizzle-orm/pg-core';
import { UserTable } from './user.schema';
import { timestamps } from './schema-helper';

export const SessionTable = t.pgTable('sessions', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  userId: t
    .uuid('user_id')
    .references(() => UserTable.id, { onDelete: 'cascade' })
    .notNull(),
  token: t.text('token').notNull(),
  expiresAt: t.timestamp('expires_at', { withTimezone: true }).notNull(),
  ipAddress: t.text('ip_address'),
  userAgent: t.text('user_agent'),
  ...timestamps,
});
