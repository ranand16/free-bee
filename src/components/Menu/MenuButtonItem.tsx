import * as React from "react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utility/functions";
import { VariantProps, cva } from "class-variance-authority";

const menuButtonItemuttonVariants = cva(
    "hover:bg-default-bold dark:hover:bg-neutral-subtle-hovered focus-visible:outline-focused-dark focus-visible:-outline-offset-2 focus-visible:outline-2",
    {
        variants: {
            isSelected: {
                true: "bg-default-bold-pressed before:w-[2px] before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-brand-bold before:content-[''] text-selected-tab before:hover:text-selected-tab hover:bg-brand-boldest-hovered hover:text-selected-tab hover:active:bg-brand-boldest-pressed dark:bg-selected-bg !dark:text-selected-tab-dark dark:before:bg-selected-bold-dark ",
                false: "dark:text-white",
            },
            isDisabled: {
                true: "hover:bg-transparent bg-transparent text-disabled-alternate cursor-not-allowed dark:hover:bg-transparent dark:bg-transparent dark:text-disabled-txt",
                false: "relative flex box-border w-full min-h-[40px] m-0 items-center border-0 text-sm outline-0 decoration-0 no-underline px-4 py-2 active:bg-default-bold-hovered dark:active:bg-neutral-subtle-pressed",
            },
        },
        defaultVariants: {
            isSelected: false,
            isDisabled: false,
        },
    }
);

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
            <span className="flex box-border gap-3 items-center flex-row justify-between w-full flex-grow">
                {imageBeforeSrc && (
                    <span className="flex justify-center shrink-0 items-center">
                        {
                            <img
                                src={imageBeforeSrc}
                                alt={description}
                                height={24}
                                width={24}
                                className="rounded-[3px]"
                            />
                        }
                    </span>
                )}
                <span className="flex flex-col flex-grow leading-4 outline-none overflow-hidden text-left">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                        {children}
                    </span>
                    {description && (
                        <span className="block mt-1 text-xs text-subtlest overflow-hidden text-ellipsis whitespace-nowrap">
                            {description}
                        </span>
                    )}
                </span>
            </span>
        </button>
    );
};

export default MenuButtonItem;
