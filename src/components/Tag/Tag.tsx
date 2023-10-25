import * as React from "react";
import { InputHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const TagVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof TagVariants> {
    label?: string;
    href?: string;
    removeButtonLabel?: any;
}

const Tag = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, href, className, variant, removeButtonLabel, ...props }, ref) => {
        return (
            <div
                className={`tag inline-flex items-center h-[20px] m-[4px] p-0 relative bg-default-bold dark:bg-inverse ${
                    href ? "dark:hover:bg-neutral-hovered" : ""
                } rounded-[3px] overflow-hidden`}
                ref={ref}
            >
                {href ? (
                    <a
                        href={href}
                        className="text-sm whitespace-nowrap text-ellipsis max-w-[180px] px-[4px] py-[2px] no-underline hover:underline text-brand-bold hover:bg-default-bold-hovered"
                    >
                        {label}
                    </a>
                ) : (
                    <span className="text-sm whitespace-nowrap text-ellipsis dark:text-neutral-bold-hovered-dark max-w-[180px] px-[4px] py-[2px]">
                        {label}
                    </span>
                )}
            </div>
        );
    }
);

export default Tag;
