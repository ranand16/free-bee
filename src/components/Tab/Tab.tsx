import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    selected: Boolean;
}

const Tab = ({ children, className, id }: TabProps) => {
    return (
        <div className={cn("tab-item cursor-pointer", className)} id={id}>
            {children}
        </div>
    );
};

export default Tab;
