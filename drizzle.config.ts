// import 'dotenv/config'
// import process from 'node:process'
import { defineConfig } from 'drizzle-kit'
// import * as dotenv from "dotenv";
// dotenv.config();

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: Deno.env.get('DATABASE_URL')!,
    },
    verbose: true,
    strict: true,
})
