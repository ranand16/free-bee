import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    selected: Boolean;
}

const TabPanel = ({ children, className, selected }: TabPanelProps) => {
    return selected ? (
        <div className={cn("tabpanel", className)}>{children}</div>
    ) : (
        <></>
    );
};

export default TabPanel;
