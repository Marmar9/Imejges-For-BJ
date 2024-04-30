declare global {
    namespace NodeJS {
        interface ProcessEnv{
            PGURL: string 

            }
        }
    }

export {}
