import { prisma } from "prisma/db";
import { z } from "zod";

export const searchProductSchema = z.object({
  name: z.string().optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),

  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),

  minDiscount: z.coerce.number().min(0).max(100).optional(),
  maxDiscount: z.coerce.number().min(0).max(100).optional(),

  sort: z
    .enum(["top-rated", "newest", "price-asc", "price-desc"])
    .optional()
    .default("newest"),

  skip: z.coerce.number().int().min(0).optional().default(0),
  take: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type SearchProductInput = z.infer<typeof searchProductSchema>;

export async function searchProducts(params: SearchProductInput) {
  const {
    name,
    category,
    subcategory,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort = "newest",
    skip = 0,
    take = 20,
  } = params;

  const sortMap: Record<SearchProductInput["sort"], any> = {
    "top-rated": { rating_average: "desc" },
    newest: { createdAt: "desc" },
    "price-asc": { discounted_price: "asc" },
    "price-desc": { discounted_price: "desc" },
  };

  return await prisma.product.findMany({
    where: {
      name: name ? { contains: name, mode: "insensitive" } : undefined,
      category: category ? { equals: category } : undefined,
      subcategory: subcategory ? { equals: subcategory } : undefined,
      discounted_price: {
        gte: minPrice,
        lte: maxPrice,
      },
      discount: {
        gte: minDiscount,
        lte: maxDiscount,
      },
    },
    orderBy: sortMap[sort],
    skip,
    take,
    include: {
      media: true,
    },
  });
}
