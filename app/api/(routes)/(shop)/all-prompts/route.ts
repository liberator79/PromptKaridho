import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";
import { User, currentUser } from "@clerk/nextjs/server";
export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();
    const sellerId = user?.id;
    const prompts = await prisma.prompts.findMany({
      where: {
        sellerId,
      },
      include: {
        orders: true,
      },
    });
    return NextResponse.json(prompts);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
