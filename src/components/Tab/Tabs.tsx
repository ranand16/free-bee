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
    onTabChange: (selected: number) => void;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
    ({ id, onTabChange, children }, ref: any) => {
        const tabClick = (e: any) => {
            if (!ref) return;
            console.log(
                "ref current ",
                // document
                //     .getElementById(id as string)
                ref?.current?.getElementsByClassName("tab-item")
            );
            console.log("ref target e.target: ", e.target);
            console.log("ref target: ", ref.current);
            // onTabChange(selected);
        };
        return (
            <div id={id} ref={ref} className={""} onClick={tabClick}>
                {children}
            </div>
        );
    }
);

export default Tabs;
