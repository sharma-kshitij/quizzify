import getQuiz from "@/app/utils/getQuizQuesAns";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Hello");
  return NextResponse.json({
    msg: "hello",
  });
}

interface PostRequestBody {
  topic: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const data: PostRequestBody = await req.json();
  let result;
  result = await getQuiz(data.topic);
  return NextResponse.json({
    topic: data.topic,
    res: JSON.parse(result?.slice(13, -3) ?? "{}"),
  });
}
