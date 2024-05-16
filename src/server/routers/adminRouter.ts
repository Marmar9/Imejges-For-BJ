import {t} from "../trpc"

const router = t.router;
const adminProcedure = t.procedure.use((options)=> {
    
});


export default router({
  submittVoting: adminProcedure.query(async () => {
    return [1,2,34,5,5]
  }),
});
