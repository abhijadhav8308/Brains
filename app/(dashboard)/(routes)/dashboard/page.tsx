"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-[#9a21eb]",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "text-[#eb5f52]",
    bgColor: "bg-violet-500/10",
    href: "/code"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-[#3c83ed]",
    bgColor: "bg-violet-500/10",
    href: "/image"
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-[#00bd8e]",
    bgColor: "bg-violet-500/10",
    href: "/music"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-[#fd3b4b]",
    bgColor: "bg-violet-500/10",
    href: "/video"
  },
]

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">Chat with the smartest AI - Brains</p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card key={tool.href} onClick={() => router.push(tool.href)} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-medium">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}