import { User, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prismaDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user: User | null = await currentUser();
    if (!user) {
      return new NextResponse("Please Login", { status: 400 });
    }
    const shop = await prisma.shops.findUnique({
      where: {
        userId: user.id,
      },
    });
    console.log(shop);
    return NextResponse.json({ user, shop });
  } catch (e) {
    console.log(e);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
