"use client";

import Image from "next/image";
import Link from "next/link";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation"; 
import { FreeCounter } from "@/components/freecounter";

const poppins = Poppins({weight: "600", subsets: ["latin"]});

const sidebarRoutes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/code",
        color: "text-emerald-700",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/music",
        color: "text-orange-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
];

interface SidebarProps {
    apiLimitCount: number;
};

const Sidebar = ({apiLimitCount = 0}:SidebarProps) => {

    const pathname = usePathname();

    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image alt="logo" src="/brains-logo.png" fill sizes="33vw"/>
                    </div>
                    <h1 className={cn("text-2xl font-bold", poppins.className)}>Brains</h1>
                </Link>
                <div className="space-y-1">
                    {sidebarRoutes.map((route, index) => (
                        <Link key={route.href} href={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  hover:bg-white/10 rounded-lg transition", 
                            pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                        )}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>   
                    ))}
                </div>
            </div>
            <FreeCounter apiLimitCount={apiLimitCount} />
        </div>
     );
}
 
export default Sidebar;