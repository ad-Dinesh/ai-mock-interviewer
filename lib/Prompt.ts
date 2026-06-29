export const INTERVIEW_PROMPT = `
Job Position: {jobPosition}

Job Description:
{jobDescription}

Years of Experience:
{jobExperience}

Generate exactly 10 interview questions along with answers.

Return ONLY valid JSON.

Format:

[
  {
    "question": "",
    "answer": ""
  }
]
`;