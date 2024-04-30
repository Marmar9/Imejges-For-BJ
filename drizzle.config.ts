import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.PGURL
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
  
})
