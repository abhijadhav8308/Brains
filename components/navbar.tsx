import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();

    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount}/>
            <div className="flex w-full justify-end">
                <UserButton />
            </div>
        </div>
     );
}
 
export default Navbar;