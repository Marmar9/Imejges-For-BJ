// env.d.ts before
// declare global {
//     namespace NodeJS {
//         interface ProcessEnv{
//             PGURL: string
//
//             }
//         }
//     }
//
//  export {}

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    PGURL: z.string().url(),
  },

  experimental__runtimeEnv: {
  },
});
