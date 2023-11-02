import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

const TabList = ({ children, className }: TabListProps) => {
    return <div className={cn("", className)}>{children}</div>;
};

export default TabList;
