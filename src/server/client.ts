import {t, createContext} from "./trpc"
import appRouter from "./routers";

export default t.createCallerFactory(appRouter)(await createContext());
