import type { ReactNode } from "react";

type CardProps = {
    bg?: string;
    addClassName?: string;
    children: ReactNode;
};

export const Card = ({ bg = "bg-white", addClassName = "", children }: CardProps) => (
    <div className={`p-[2rem] border border-gray-100 rounded ${bg} ${addClassName}`}>
        {children}
    </div>
);