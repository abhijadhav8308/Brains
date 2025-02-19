"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react"
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="md:hidden"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <SheetTitle></SheetTitle>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;