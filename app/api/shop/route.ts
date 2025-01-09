import prisma from "@/util/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") as string;

  if (!id) {
    const shopItem = await prisma.shop.findMany({ take: 15 });
    if (shopItem) {
      return NextResponse.json(shopItem);
    }
  }

  const shopItem = await prisma.shop.findFirst({
    where: {
      id: id,
    },
  });

  if (shopItem) {
    return NextResponse.json(shopItem);
  }

  return NextResponse.json({ message: "error" });
}

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log("data :>> ", data);
  return NextResponse.json({ message: "error" });
}
