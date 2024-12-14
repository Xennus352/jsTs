import { prisma } from "@/prisma"; // Ensure the correct path to your Prisma client
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
  
    const data = await req.json();

    const updatedRecord = await prisma.blog.update({
      where: { id: data.id }, 
      data: {
        title: data.title,
        description: data.description,
        link:data.link,
        tag:data.tag
      },
    });

    return NextResponse.json(updatedRecord, { status: 200 });
  } catch (error) {
    console.error("Error updating record:", error);
    return NextResponse.json(
      { message: "Error updating record" },
      { status: 500 }
    );
  }
}
