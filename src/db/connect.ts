import { neon } from '@neondatabase/serverless'
import process from 'npm:process'
import { drizzle } from 'drizzle-orm/neon-http'
import * as dotenv from 'dotenv'
import * as schema from './schema.ts'
dotenv.config()

// neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, { logger: true, schema })
