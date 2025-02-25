"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Emily Carter",
        avatar: "./emily-carter.png",
        title: "Software Developer",
        description: "Brains is my coding partner. Fast code generation and brainstorming. It's expanded my mental capacity."
    },
    {
        name: "David Lee",
        avatar: "./david-lee.png",
        title: "Musician",
        description: "AI music that inspires! Brains overcomes creative blocks. My creative brain is supercharged."
    },
    {
        name: "Sarah Jenkins",
        avatar: "./sarah-jenkins.png",
        title: "Video Editor",
        description: "Brains simplifies video editing. High-quality content, fast. A super-efficient processing center."
    },
    {
        name: "Michael Rodriguez",
        avatar: "./michael-rodriguez.png",
        title: "Researcher",
        description: "Accurate research and analysis. Brains connects the dots. Essential for my cognitive workflow."
    },
]

export const LandingContent = () => {
    return (
        <div className="max-w-screen-xl m-auto">
            <div className="flex justify-evenly items-center">
                <Image src="/openai-logo.svg" alt="openai logo" width={150} height={100} className="max-h-[40px] grayscale opacity-75" />
                <Image src="/replicate-ai-logo.svg" alt="replicate ai logo" width={150} height={100} className="max-h-[40px] grayscale opacity-75" />
                <Image src="/apple-logo.svg" alt="amazon logo" width={150} height={100} className="max-h-[40px] grayscale opacity-75" />
                <Image src="/brave-software-logo.svg" alt="brave software logo" width={150} height={100} className="max-h-[40px] grayscale opacity-75" />
                <Image src="/prisma-logo.svg" alt="prisma logo" width={150} height={100} className="max-h-[40px] grayscale opacity-75" />
            </div>
            <div className="grid grid-cols-2 gap-20 h-[80vh]">
                <div className="flex flex-col justify-center align-center">
                    <h2 className="text-4xl text-slate-800 font-extrabold mb-5">Your All-In-One AI Powerhouse</h2>
                    <p className="text-slate-400 font-thin text-lg">Brains is more than just a <span className="font-bold text-slate-600">chatbot</span>. Generate high-quality <span className="font-bold text-slate-600">code</span>,
                     stunning <span className="font-bold text-slate-600">images</span>, captivating <span className="font-bold text-slate-600">music</span>, and engaging <span className="font-bold text-slate-600">videos</span>, all while having intelligent conversations. Unlock your creative and productive potential with a single, powerful AI platform.</p>
                </div>
                <div className="flex justify-evenly items-center gap-4">
                    <MessageSquare className="bg-slate-200 text-[#9a21eb] rounded-full p-6 w-20 h-20"/>
                    <CodeIcon className="bg-slate-200 text-[#eb5f52] rounded-full p-6 w-20 h-20"/>
                    <ImageIcon className="bg-slate-200 text-[#3c83ed] rounded-full p-6 w-20 h-20"/>
                    <MusicIcon className="bg-slate-200 text-[#00bd8e] rounded-full p-6 w-20 h-20"/>
                    <VideoIcon className="bg-slate-200 text-[#fd3b4b] rounded-full p-6 w-20 h-20"/>
                </div>
            </div>
            <div className="pb-20 h-[80vh]">
                <h2 className="text-center text-4xl text-slate-800 font-extrabold mb-10">What our users say about us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {testimonials.map((item) => (
                        <Card key={item.description} className="bg-slate-200 border-none ">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <Avatar className="w-12 h-12 bg-slate-300">
                                            <AvatarImage src={item?.avatar} />
                                            <AvatarFallback>
                                                {item?.name?.charAt(0)}
                                                {item?.name?.charAt(-1)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <p className="text-lg mt-4 text-slate-600">{item.name}</p>
                                        <p className="text-slate-400 text-sm font-normal">{item.title}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0 text-slate-500">
                                    {item.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}