import * as React from "react";
import { HTMLAttributes } from "react";
import { cn } from "../../utility/functions";
import { VariantProps, cva } from "class-variance-authority";

const menuSectionVariants = cva("", {
    variants: {
        isSeparated: {
            true: " border-t-2 border-section-separator dark:border-t-2 dark:border-primary",
            false: "",
        },
        isScrollable: {
            true: "max-h-[210px]",
            false: "",
        },
    },
    defaultVariants: {
        isSeparated: false,
        isScrollable: false,
    },
});

export interface MenuSectionProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof menuSectionVariants> {
    isSeparated?: boolean;
    isScrollable?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({
    children,
    className,
    id,
    isSeparated,
    isScrollable,
    ...props
}) => {
    return (
        <div
            className={cn(
                menuSectionVariants({ isSeparated, isScrollable }),
                "after:content-[''] after:block after:h-[6px] before:content-[''] before:block before:h-[6px] text-default flex-shrink-0 overflow-auto "
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default MenuSection;
