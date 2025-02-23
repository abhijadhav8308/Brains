"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react"
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
    apiLimitCount : number;
}

const MobileSidebar = ({apiLimitCount}: MobileSidebarProps ) => {
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
                <Sidebar apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;