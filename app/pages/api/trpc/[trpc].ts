import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import jackrabbit from "jackrabbit";
import dotenv from "dotenv";

import { z } from "zod";

dotenv.config({ path: "../../../.env.local" });

// @ts-ignore
const brokerURL: string = process.env.RABBIT_URL;
const brokerCtx = jackrabbit(brokerURL);

const appRouter = trpc.router();

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
