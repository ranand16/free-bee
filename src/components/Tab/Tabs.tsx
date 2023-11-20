import * as React from "react";
import { HTMLAttributes, ChangeEventHandler, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const TabsVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface TabsProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof TabsVariants> {
    onTabChange: (selected: any) => void;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
    ({ id, onTabChange, children }, ref: any) => {
        const tabClick = (e: any) => {
            if (!ref) return;
            onTabChange(e.target);
        };
        return (
            <div id={id} ref={ref} className={""} onClick={tabClick}>
                {children}
            </div>
        );
    }
);

export default Tabs;
