import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    selected: Boolean;
}

const Tab = ({ children, selected, className, id, ...props }: TabProps) => {
    return (
        <div
            className={cn(
                "tab-item cursor-pointer leading-7 m-0 py-1 px-2",
                className
            )}
            id={id}
            {...props}
        >
            {children}
        </div>
    );
};

export default Tab;
