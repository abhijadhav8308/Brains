"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-slate-800 font-bold max-w-screen-xl m-auto py-16 md:py-32 px-6 md:px-3 lg:px-3 xl:px-0 text-center space-y-5">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
                <h1>Meet Brains, Your AI Co-Pilot for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-400 to-pink-600">
                    <TypewriterComponent 
                    options={{
                        strings: ["Chatbot.", "Code Generation.", "Photo Generation.", "Music Generation.", "Video Generation.",
                            "and Everything Else...",
                        ], autoStart: true, loop: true,
                    }}/>
                </div>
            </div>
            <div className="text-sm md:text-xl text-slate-600 font-thin ">
                Create content 10x faster with AI
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6">Get Started For Free</Button>
                </Link>
            </div>
            <div className="text-slate-400 text-xs md:text-sm font-normal">No credit card required</div>
        </div>
    );
}