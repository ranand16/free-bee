import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utility/functions";
import { VariantProps, cva } from "class-variance-authority";

const menuButtonItemuttonVariants = cva("hover:bg-default-bold ", {
    variants: {
        isSelected: {
            true: "bg-default-bold-pressed before:w-[2px] before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-brand-bold before:content-[''] text-selected-tab before:hover:text-selected-tab hover:bg-brand-boldest-hovered hover:text-selected-tab hover:active:bg-brand-boldest-pressed",
            false: "",
        },
        isDisabled: {
            true: "hover:bg-transparent bg-transparent text-disabled-alternate cursor-not-allowed",
            false: "relative flex box-border w-full min-h-[40px] m-0 items-center border-0 text-sm outline-0 decoration-0 no-underline px-4 py-2 active:bg-default-bold-hovered",
        },
    },
    defaultVariants: {
        isSelected: false,
        isDisabled: false,
    },
});

export interface MenuButtonItemProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof menuButtonItemuttonVariants> {
    description?: string;
    imageBeforeSrc?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
}

const MenuButtonItem: React.FC<MenuButtonItemProps> = ({
    children,
    className,
    description,
    imageBeforeSrc,
    id,
    isSelected,
    isDisabled,
    ...props
}) => {
    return (
        <button
            className={cn(
                "",
                menuButtonItemuttonVariants({
                    isSelected,
                    isDisabled,
                    className,
                })
            )}
            id={id}
            disabled={isDisabled}
            {...props}
        >
            <span>
                {imageBeforeSrc && (
                    <span>
                        {<img src={imageBeforeSrc} alt={description} />}
                    </span>
                )}
                <span>
                    <span>{children}</span>
                    {description && <span>{description}</span>}
                </span>
            </span>
        </button>
    );
};

export default MenuButtonItem;
