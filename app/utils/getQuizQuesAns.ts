import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

async function getQuiz(topic: string) {
  let prompt =
    "Write a quiz about " +
    topic +
    ". Quiz should have 5 questions with 4 options from which only one is correct. The quiz is aimed at high school students.Return only a single javascript array which contains {question,options} .";
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

export default getQuiz;
