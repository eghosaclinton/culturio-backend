import { defineConfig } from 'drizzle-kit'
import "jsr:@std/dotenv/load";

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
