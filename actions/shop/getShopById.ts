"use server";
import prisma from "@/lib/prismaDb";

export const getShopById = async (shopId: string) => {
  const shopData = await prisma.shops.findUnique({
    where: {
      userId: shopId,
    },
  });
  return shopData;
};
