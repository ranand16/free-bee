import * as React from "react";
import { FC, ButtonHTMLAttributes } from "react";
import Button from "../Button";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utility/functions";

const dropdownMenuVariants = cva(
    "items-baseline inline-flex max-w-full relative whitespace-nowrap border-0 align-middle justify-center text-default bg-transparent dark:text-zinc-dark dark:bg-neutral py-0 px-[10px] leading-8 h-8 hover:bg-default-bold-hovered hover:text-default active:bg-neutral-pressed-bg active:text-default dark:hover:bg-neutral-hovered dark:active:bg-neutral-pressed dark:active:text-zinc-dark",
    {
        variants: {
            selected: {
                true: "bg-default-bold dark:bg-selected-dropdown-dark dark:focus:bg-selected-dropdown-dark dark:active:bg-selected-dropdown-dark text-selected-tab focus:text-brand-bold active:text-brand-bold hover:text-brand-bold dark:text-selected-tab-dark dark:focus:text-selected-tab-dark dark:active:text-selected-tab-dark dark:hover:text-selected-tab-dark",
                false: "",
            },
            open: {
                true: "bg-default-bold-pressed focus:bg-default-bold-pressed active:bg-default-bold-pressed hover:bg-default-bold-pressed",
                false: "",
            },
        },
        defaultVariants: {
            selected: true,
        },
    }
);

export interface DropdownMenuProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof dropdownMenuVariants> {
    label: any;
    selected: boolean;
    open: boolean;
    callback: (val: string) => void; // likely to bew a function
}

const DropdownMenu = React.forwardRef<HTMLButtonElement, DropdownMenuProps>(
    (
        { selected, open, label, className, callback, children, ...props },
        ref
    ) => {
        return (
            <>
                <Button
                    ref={ref}
                    className={cn(
                        dropdownMenuVariants({
                            className,
                            selected,
                            open,
                        })
                    )}
                    onClick={() => callback(label)}
                    label={
                        <>
                            <span className="opacity-100 my-0 mx-[2px] flex-shrink grow overflow-hidden whitespace-nowrap text-ellipsis">
                                {label}
                            </span>
                            <span className="opacity-100 transition-opacity duration-300 ease-in-out flex my-0 ml-[2px] mr-[-2px] flex-grow-0 shrink-0 self-center text-[0px] select-none leading-[0]">
                                <div className="box-border opacity-50 mx-[-4px]">
                                    <span
                                        aria-hidden="true"
                                        className="inline-block shrink-0 leading-4"
                                    >
                                        <DownArrowComponent />
                                    </span>
                                </div>
                            </span>
                        </>
                    }
                    {...props}
                />
                {open && children}
            </>
        );
    }
);

export default DropdownMenu;

export const DownArrowComponent = ({
    width = 24,
    height = 24,
    ...props
}: any) => (
    <svg width={width} height={height} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);
