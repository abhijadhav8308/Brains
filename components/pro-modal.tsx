"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, CodeIcon, ImageIcon, Megaphone, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        color: "text-green-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-blue-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        color: "text-red-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-gray-500",
        bgColor: "bg-violet-500/10",
    },
]

export const ProModal = () => {
    const proModal = useProModal();

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center
                    flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Brains
                            <Badge className="uppercase text-sm py-1" variant="premium">pro</Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    {tool.label}
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                        <Alert variant="destructive">
                            <Megaphone className="h-5 w-5" />
                            <AlertDescription>
                            This project is currently in development and subscription services are not yet available. We appreciate your interest in the potential premium features of Brains.
                            </AlertDescription>
                        </Alert>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size="lg" variant="premium" className="w-full cursor-not-allowed ring-offset-0">Upgrade
                        <Zap className="w-4 h-4 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}