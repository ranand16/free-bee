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
    ({ id, onTabChange, children }, ref) => {
        const [selected, setSelected] = React.useState(0);

        React.useEffect(() => {
            console.log("tab item :: ");
            onTabChange(selected);
        }, [selected]);

        const tabClick = (e: any) => {
            if (!ref) return;
            console.log(
                "ref current ",
                document
                    .getElementById(id as string)
                    ?.getElementsByClassName("tab-item")
            );
            console.log("ref current ", e.target);
        };
        return (
            <div id={id} ref={ref} className={""} onClick={tabClick}>
                {children}
            </div>
        );
    }
);

export default Tabs;
