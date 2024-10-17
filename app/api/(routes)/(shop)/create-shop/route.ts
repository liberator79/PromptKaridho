import prisma from "@/lib/prismaDb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const userId = data.userId;
    const user = await prisma.shops.findUnique({
      where: {
        userId,
      },
    });
    if (user) {
      return new NextResponse("shop already exist", { status: 400 });
    }
    const shop = await prisma.shops.create({ data });
    return NextResponse.json(shop, { status: 201 });
  } catch (error) {
    console.log("Something Went wrong", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
