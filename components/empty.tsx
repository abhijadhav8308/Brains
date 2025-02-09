import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex justify-center">
            <div className="relative h-64 w-40">
                <Image alt="Empty" fill src="/come-on-search-something.jpg" />
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-10">C'mon,<br />search something...</h2>
                <p className="text-muted-foreground">{label}</p>
            </div>
        </div>
    );
}