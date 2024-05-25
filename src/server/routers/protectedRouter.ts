import { t } from "../trpc"
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { z } from "zod";

const router = t.router;
const protectedProcedure = t.procedure.use((opts) => {
  //  const { orgId, userId } = auth();
  //  console.log(userId)
  //  if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" })

  return opts.next({
    ctx: {
      a: "b"
    }
  })
});

const registerGameInput = z.object(
  {
    gameName: z.string(),
    description: z.string(),
  });


export default router({
  registerGame: protectedProcedure.input(registerGameInput).mutation(async (opts) => {
    const { input } = opts
    await db.insert(registrations).values({ gameName: input.gameName, description: input.description });
  }),
});
