import * as React from "react";
import { cn } from "../../utility/functions";

export interface DropdownMenuItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    description?: string;
    labelWrap?: boolean;
    descriptionWrap?: boolean;
    isDisabled?: boolean;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
    label,
    description,
    labelWrap = false,
    descriptionWrap = false,
    isDisabled = false,
    children,
}) => {
    return (
        <button
            role="menuitem"
            className={cn(
                "relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 cursor-pointer dark:text-white hover:bg-default-bold dark:hover:text-white dark:hover:bg-neutral-subtle-hovered",
                {
                    "cursor-not-allowed text-disabled-alternate hover:text-disabled-alternate dark:text-disabled-txt dark:hover:text-disabled-txt bg-neutral-subtle hover:bg-neutral-subtle dark:bg-neutral-subtle dark:hover:bg-neutral-subtle":
                        isDisabled,
                }
            )}
            type="button"
        >
            {children}
            {!children && (
                <span className="flex box-border gap-3 items-center justify-center w-full flex-grow">
                    <span className="flex justify-center flex-col grow leading-4 text-left overflow-hidden">
                        <span
                            className={cn(
                                {
                                    "text-disabled-alternate hover:text-disabled-alternate dark:text-disabled-txt dark:hover:text-disabled-txt flex flex-col justify-center flex-grow leading-4 break-words":
                                        isDisabled,
                                },
                                {
                                    "block overflow-hidden text-ellipsis whitespace-nowrap":
                                        labelWrap,
                                }
                            )}
                            data-item-title="true"
                        >
                            {label}
                        </span>
                        {description && (
                            <span
                                className={cn(
                                    "mt-1 text-xs dark:text-subtlest-old text-subtlest-old ",
                                    { "break-words": !descriptionWrap },
                                    {
                                        "block overflow-hidden text-ellipsis whitespace-nowrap":
                                            descriptionWrap,
                                    }
                                )}
                            >
                                {description}
                            </span>
                        )}
                    </span>
                </span>
            )}
        </button>
    );
};

export default DropdownMenuItem;
