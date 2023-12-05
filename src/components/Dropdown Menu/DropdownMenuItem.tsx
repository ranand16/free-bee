import * as React from "react";

export interface DropdownMenuItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    description?: string;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
    label,
    description,
    children,
}) => {
    return (
        <button
            role="menuitem"
            className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 cursor-pointer dark:text-white hover:bg-default-bold dark:hover:text-white dark:hover:bg-neutral-subtle-hovered"
            type="button"
        >
            {children}
            {!children && (
                <span className="">
                    <span className="flex justify-center flex-col grow leading-4 text-left overflow-hidden">
                        <span className="" data-item-title="true">
                            {label}
                        </span>
                        <span className="mt-1 text-xs dark:text-subtlest-old text-subtlest-old break-words">
                            {description}
                        </span>
                    </span>
                </span>
            )}
        </button>
    );
};

export default DropdownMenuItem;
