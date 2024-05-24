import { initTRPC } from '@trpc/server';
import { NextRequest } from 'next/server';

export const createContext = async (req?:NextRequest) => {
  return {
      req: req,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create();
