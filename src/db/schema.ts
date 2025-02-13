import {
    pgTable,
    uuid,
    varchar,
    integer,
    timestamp,
    index,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

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

//tbf i dont know what this schema does
export const exhibitsWithVisitorCount = pgTable(
    'exhibits_with_visitor_count',
    {
        id: uuid('id').primaryKey(),
        title: varchar('title').notNull(),
        description: varchar('description', { length: 500 }).notNull(),
        media_url: varchar('media_url').notNull(),
        visitor_count: integer('visitor_count').notNull(),
    },
    //honestly do not know what indexes do...yet
    (table) => ([
        index('visitor_count_idx').on(table.visitor_count),
    ])
)

// some raw sql i guess? 
export const createVisitorCountView = sql`
  CREATE OR REPLACE VIEW exhibits_with_visitor_count AS
  SELECT 
    e.*,
    COUNT(v.id) as visitor_count
  FROM exhibits e
  LEFT JOIN visits v ON e.id = v.exhibit_id
  GROUP BY e.id;
  `
