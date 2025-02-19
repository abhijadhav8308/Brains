import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

const openAIKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    organization: process.env.OPENAI_ORG_ID,
    project: process.env.OPENAI_PROJ_ID,
    apiKey: openAIKey
});

const instructionMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code commits for explaination"
}

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

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free Trial has expired", { status: 403 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [ instructionMessage , ...messages],
        })

        await increaseApiLimit();

        return NextResponse.json(response.choices[0].message);
    }
    catch (error) {
        console.log("[CODE_ERROR] : ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}