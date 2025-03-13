import "jsr:@std/dotenv/load";
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema.ts'

// neonConfig.fetchConnectionCache = true;

const sql = neon(Deno.env.get('DATABASE_URL')!)

export const db = drizzle(sql, { logger: true, schema })
