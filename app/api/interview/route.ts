import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MockInterview, UserAnswer } from "@/utils/schema";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await db.insert(MockInterview).values({
    jsonMockResp: body.jsonMockResp,
    jobPosition: body.jobPosition,
    jobDesc: body.jobDesc,
    jobExperience: body.experience,
    createdBy: "test@gmail.com",
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    result,
  });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    await db.insert(UserAnswer).values({
      mockIdRef: body.mockIdRef,
      question: body.question,
      correctAnswer: body.correctAnswer,
      userAnswer: body.userAnswer,
      feedback: body.feedback,
      rating: body.rating,
      userEmail: body.userEmail,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}