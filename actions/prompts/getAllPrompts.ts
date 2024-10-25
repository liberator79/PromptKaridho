"use server";
import prisma from "@/lib/prismaDb";

export async function getAllPrompts(pageNumber = 1, pageSize = 8) {
  try {
    const promptsData = prisma.prompts.findMany({
      include: {
        orders: true,
        images: true,
        reviews: true,
        promptUrl: true,
      },
      where: {
        status: "Live",
      },
      take: pageSize,
      skip: (pageNumber - 1) * pageSize,
    });
    return promptsData;
  } catch (e) {
    console.log(e);
  }
}
