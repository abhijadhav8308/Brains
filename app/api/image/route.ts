import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

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
        const { prompt, amount = 1, resolution = "512x512" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!openAIKey) {
            return new NextResponse("OpenAI API Key not configured == " + openAIKey, { status: 500 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }
        
        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }

        if (!resolution) {
            return new NextResponse("Resolution is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free Trial has expired", { status: 403 })
        }

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            size: resolution,
            quality: "hd",
            n: 1,
        })

        await increaseApiLimit();

        return NextResponse.json(response.data[0].url);
    }
    catch (error) {
        console.log("[IMAGE_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}