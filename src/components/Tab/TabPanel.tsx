import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

export interface TabPanelProps extends HTMLAttributes<HTMLElement> {
    selected: Boolean;
}

const TabPanel = ({ children, className, selected }: TabPanelProps) => {
    return selected ? (
        <section className={cn("tabpanel", className)}>{children}</section>
    ) : (
        <></>
    );
};

export default TabPanel;
