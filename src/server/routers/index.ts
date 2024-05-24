import { z } from "zod";
import { t } from "../trpc"
import adminRouter from "./adminRouter";
import protectedRouter from "./protectedRouter";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { eq } from "drizzle-orm";
const router = t.router;
const publicProcedure = t.procedure;

export default router({
  admin: adminRouter,
  protected: protectedRouter,

  getProjects: publicProcedure.input(z.object({ yearDate: z.string().optional() })).query(async (opts) => {
    if (opts.input.yearDate) {
      // Do something
    }

    return await db.select({ gameName: registrations.gameName, description: registrations.description }).from(registrations);
  }),

  getProject: publicProcedure.input(z.object({ gameName: z.string() })).query(async (opts) => {
    return await db.select({ gameName: registrations.gameName, description: registrations.description }).from(registrations).where(eq(registrations.gameName, opts.input.gameName));
  }),


});
