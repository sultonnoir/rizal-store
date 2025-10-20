import { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "../init";
import { searchProducts, searchProductSchema } from "./product-service";

export const productRouter = {
  list: publicProcedure.input(searchProductSchema).query(async ({ input }) => {
    return await searchProducts(input);
  }),
} satisfies TRPCRouterRecord;
