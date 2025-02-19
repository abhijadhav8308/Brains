import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || "",
    useFileOutput: false
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = await auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free Trial has expired", { status: 403 })
        }

        const input = {
            text: prompt
        }; 

        const response = await replicate.run("haoheliu/audio-ldm:b61392adecdd660326fc9cfc5398182437dbe5e97b5decfb36e1a36de68b5b95", { input });

        await increaseApiLimit();

        return NextResponse.json(response);
    }
    catch (error) {
        console.log("[MUSIC_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}