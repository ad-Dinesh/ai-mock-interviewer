import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";

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