import {t} from "../trpc"

const router = t.router;
const publicProcedure = t.procedure;

export default router({
  getProjects: publicProcedure.query(async (opts) => {
    console.log(opts.ctx)
    return [1,2,34,5,5]
  }),

  getProject: publicProcedure.query(async () => {
    return [1,2,34,5,5]
  }),

  registerGame: publicProcedure.query(async () => {
    return [1,2,34,5,5]
  }),

  submittVoting: publicProcedure.query(async () => {
    return [1,2,34,5,5]
  }),
});
