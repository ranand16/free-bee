import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {}

const TabPanel = ({ children, className }: TabPanelProps) => {
    return <div className={cn("tabpanel", className)}>{children}</div>;
};

export default TabPanel;
