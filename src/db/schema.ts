import { pgTable, uuid, varchar, integer, timestamp } from 'drizzle-orm/pg-core'

export const exhibitsTable = pgTable('exhibits', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: varchar('title', { length: 255 }).notNull(),
    description: varchar('description', { length: 500 }).notNull(),
    media_url: varchar('media_url', { length: 255 }).notNull(),
    visitor_count: integer('visitor_count').notNull().default(0),
})

export const visitorsTable = pgTable('visitors', {
    visitor_id: uuid('id').primaryKey().defaultRandom(),
    timestamp: timestamp().defaultNow().notNull(),
    exhibit_id: uuid('exhibit_id')
        .notNull()
        .references(() => exhibitsTable.id),
})
