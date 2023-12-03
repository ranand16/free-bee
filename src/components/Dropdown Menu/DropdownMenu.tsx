import * as React from "react";
import { FC, ButtonHTMLAttributes } from "react";
import Button from "../Button";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utility/functions";

const dropdownMenuVariants = cva(
    "items-baseline inline-flex max-w-full relative whitespace-nowrap border-0 align-middle justify-center text-default bg-default-bold py-0 px-[10px] leading-8 h-8 hover:bg-default-bold-hovered hover:text-default active:bg-neutral-pressed-bg active:text-default",
    {
        variants: {
            selected: {
                true: "text-selected-tab focus:text-brand-bold active:text-brand-bold hover:text-brand-bold",
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
    callback: React.MouseEventHandler; // likely to bew a function
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
                            selected,
                            open,
                            className,
                        })
                    )}
                    onClick={callback}
                    label={
                        <>
                            <span className="opacity-100 my-0 mx-[2px] flex-shrink grow overflow-hidden whitespace-nowrap text-ellipsis">
                                {label}
                            </span>
                            <span className="opacity-100 flex my-0 mx-[2px] flex-grow self-center select-none leading-[0]">
                                <span aria-hidden="true" className="css-xyfxod">
                                    <DownArrowComponent />
                                </span>
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
