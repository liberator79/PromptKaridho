import prisma from "@/lib/prismaDb";
export async function getShopById(shopId: string) {
  try {
    const shopData = await prisma.shops.findUnique({
      where: {
        id: shopId,
      },
    });
    return shopData;
  } catch (e) {
    console.log(e);
  }
}
