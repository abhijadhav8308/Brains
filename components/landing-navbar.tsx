"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="py-5 bg-transparent max-w-screen-xl m-auto px-6 md:px-3 lg:px-3 xl:px-0 flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-2 md:mr-4">
                    <Image src="/brains-logo.png" alt="logo" fill/>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-800 font-montserrat">Brains</h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline">Sign In</Button>
                </Link>
            </div>
        </nav>
    )
}