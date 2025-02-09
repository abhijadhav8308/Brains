import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openAIKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    organization: process.env.OPENAI_ORG_ID,
    project: process.env.OPENAI_PROJ_ID,
    apiKey: openAIKey
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = await auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openAIKey) {
            return new NextResponse("OpenAI API Key not configured == " + openAIKey, { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: messages,
        })

        return NextResponse.json(response.choices[0].message);
    }
    catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}