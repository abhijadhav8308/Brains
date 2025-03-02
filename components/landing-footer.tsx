"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export const LandingFooter = () => {

    return (
        <div className="bg-slate-200 flex flex-wrap justify-center text-slate-500 w-full py-4 px-6 md:px-3 lg:px-3 xl:px-0">Made with <Heart className="fill-red-500 stroke-none mx-2" /> by - <Link href="https://github.com/abhijadhav8308" target="_blank" className="underline underline-offset-4 ml-2">Abhishek Jadhav</Link></div>
    )
}