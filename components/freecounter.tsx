"use client";

import { useEffect, useState } from "react"
import { MAX_FREE_COUNTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
    apiLimitCount: number
}

export const FreeCounter = ({apiLimitCount = 0}:FreeCounterProps) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);    

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm mb-4 text-white space-y-2">
                        <p className="mb-0">
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                        </p>
                        <Progress value={(apiLimitCount / MAX_FREE_COUNTS) * 100} className="h-3 border-0 outline-none"/>
                    </div>
                    <Button className="w-full" variant="premium" onClick={proModal.onOpen}>
                        Upgrade
                        <Zap className="w-4 h-4 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}