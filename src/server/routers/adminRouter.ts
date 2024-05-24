import { z } from "zod";
import { t } from "../trpc"
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { eq } from "drizzle-orm";

const router = t.router;
const adminProcedure = t.procedure.use((opts) => {

    return opts.next({
        ctx: {
            a: "b"
        }
    })
});


export default router({
    submittVoting: adminProcedure.input(z.object({
        votes: z.array(z.object({
            gameName: z.string(),
            voteCount: z.number()
        }))
    })).mutation(async (opts): Promise<String> => {
        await Promise.all(opts.input.votes.map((vote) => db.update(registrations).set({ voteCount: vote.voteCount }).where(eq(registrations.gameName, vote.gameName))))
        return "Sucess"
    }),
});
