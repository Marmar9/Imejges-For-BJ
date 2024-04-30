import { publicProcedure, router, createCallerFactory } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [1,2,34,5,5]
  }),
  
});

export const serverClient = createCallerFactory(appRouter)({});

export type AppRouter = typeof appRouter;

