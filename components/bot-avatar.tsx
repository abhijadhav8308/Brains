import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

const BotAvatar = () => {
    return ( 
        <Avatar className="w-8 h-8">
            <AvatarImage className="p-1 bg-blue-100" src="/brains-logo.png"/>
        </Avatar>
     );
}
 
export default BotAvatar;