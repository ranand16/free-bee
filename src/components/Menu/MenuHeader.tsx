import * as React from "react";
import { HTMLAttributes } from "react";
import { cn } from "../../utility/functions";
import { VariantProps, cva } from "class-variance-authority";

const menuHeaderVariants = cva("", {
    variants: {},
    defaultVariants: {},
});

export interface MenuHeaderProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof menuHeaderVariants> {}
const MenuSectionHeader: React.FC<MenuHeaderProps> = ({ children }) => {
    return (
        <div
            className={cn(
                "text-subtle text-[11px] font-bold leading-[1.45455] px-4 uppercase text-left mt-[14px] mb-[6px] dark:text-accent-gray"
            )}
        >
            {children}
        </div>
    );
};

export default MenuSectionHeader;
