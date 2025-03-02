import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Image Prompt is required",
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1)
});

export const resolutionOptions = [
    {
        value: "1024x1024",
        label: "1024x1024",
    },
    {
        value: "1024x1792",
        label: "1024x1792",
    },
    {
        value: "1792x1024",
        label: "1792x1024",
    },
]