import { defineConfig } from 'drizzle-kit'
import { env } from '@/env'
export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: env.PGURL
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
  
})
