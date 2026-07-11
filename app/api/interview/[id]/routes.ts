import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function DELETE(
  req: Request,
  { params }: Props
) {
  try {
    const { id } = await params;

    // Delete all answers first
    await db
      .delete(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, Number(id)));

    // Delete interview
    await db
      .delete(MockInterview)
      .where(eq(MockInterview.id, Number(id)));

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}