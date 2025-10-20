import { z } from "zod";
import { prisma } from "prisma/db";
import { createTRPCRouter, publicProcedure } from "./init";

import type { TRPCRouterRecord } from "@trpc/server";
import { productRouter } from "./products/product-route";

const todosRouter = {
  list: publicProcedure.query(async () => {
    return await prisma.posts.findMany();
  }),
  add: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.posts.create({
        data: {
          name: input.name,
          id: Date.now().toString(),
        },
      });
    }),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
  products: productRouter,
});
export type TRPCRouter = typeof trpcRouter;
