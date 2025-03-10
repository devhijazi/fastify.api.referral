import { text } from 'drizzle-orm/pg-core'
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),

  name: text('name').notNull(),
  email: text('email').notNull().unique(),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
