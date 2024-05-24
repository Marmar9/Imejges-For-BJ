import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema"
import { env } from "@/env";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: env.PGURL
});

export const db = drizzle(pool, { schema });
