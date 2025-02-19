import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center">
            <div className="w-10 h-10 relative">
                <Image alt="loader-image" fill src="/fade-stagger-circles.svg"/>
            </div>
            <p className="text-sm text-muted-foreground">Brains is thinking....</p>
        </div>
    )
}