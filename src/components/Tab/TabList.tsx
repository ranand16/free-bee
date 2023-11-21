import * as React from "react";
import { HTMLAttributes } from "react";
import { cn } from "../../utility/functions";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

const TabList = ({ children, className }: TabListProps) => {
    return (
        <header>
            <nav
                className={cn(
                    "flex p-0 m-0 relative font-medium before:content-[''] before:absolute before:m-0 before:bottom-0 before:left-2 before:right-2 before:h-[2px] before:rounded-sm before:bg-default-bold-hovered",
                    className
                )}
            >
                {children}
            </nav>
        </header>
    );
};

export default TabList;
