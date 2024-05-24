import { TRPCError } from "@trpc/server";
import { t } from "../trpc"
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { z } from "zod";

const router = t.router;
const protectedProcedure = t.procedure.use((opts) => {
    const { orgId, userId } = auth();
    console.log(userId)
    if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" })

    console.log(orgId)
    return opts.next({
        ctx: {
            a: "b"
        }
    })
});

export default router({
    registerGame: protectedProcedure.input(z.object(
        {
            gameName: z.string(),
            description: z.string()
        })).mutation(async (opts) => {
            const { input } = opts
            await db.insert(registrations).values({ gameName: input.gameName, description: input.description });
        }),
});
