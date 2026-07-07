import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
});

export async function POST(req: Request) {
    try {
        const {
            interviewId,
            question,
            correctAnswer,
            userAnswer,
            userEmail,
        } = await req.json();

        const prompt = `
You are an interview evaluator.

Question:
${question}

Correct Answer:
${correctAnswer}

User Answer:
${userAnswer}

Evaluate the user's answer.

Return ONLY valid JSON.

{
  "rating":"8",
  "feedback":"Good explanation. Mentioned state management correctly. Explain re-rendering in more detail."
}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        let text = response.text ?? "";

        text = text
            .replace("```json", "")
            .replace("```", "")
            .trim();

        const result = JSON.parse(text);

       

        return NextResponse.json(result);
    } catch (err) {
        console.log(err);

        return NextResponse.json(
            { error: "Failed" },
            { status: 500 }
        );
    }
}