import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabProps extends HTMLAttributes<HTMLDivElement> {}

const Tab = ({ children, className }: TabProps) => {
    return (
        <div className={cn("tab-item cursor-pointer", className)}>
            {children}
        </div>
    );
};

export default Tab;
