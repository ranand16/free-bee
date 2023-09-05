import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";

const lozengesVariants = cva(
    "text-[11px] font-bold text-lozenge dark:text-lozenge-dark leading-none uppercase text-center rounded-[3px] pb-[3px] pt-1 px-[5px] bg-flag",
    {
        variants: {
            variant: {
                default: "bg-subtlest dark:bg-default-dark",
                success: "bg-success-bold dark:bg-success-bold-dark",
                primary: "bg-brand-bold dark:bg-primary-dark",
                danger: "bg-danger-bold dark:bg-danger-dark",
                warning: "bg-warning-bold dark:bg-warning-dark",
                "default-subtler":
                    "bg-accent-gray-subtler text-lozenge dark:bg-flag-dark dark:text-subtlest-dark",
                "success-subtler":
                    "bg-success-bold-subtler text-accent-green-subtle dark:bg-success-dark-subtler dark:text-success-subtler-dark",
                "primary-subtler":
                    "bg-brand-subtler text-accent-blue-subtle dark:bg-primary-dark-subtler dark:text-primary-subtler-dark",
                "danger-subtler":
                    "bg-danger-subtler text-accent-red-subtle dark:bg-danger-dark-subtler dark:text-danger-subtler-dark",
                "warning-subtler":
                    "bg-warning-subtler text-accent-orange-subtle dark:bg-warning-dark-subtler dark:text-warning-subtler-dark",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface LozengesProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof lozengesVariants> {
    text: string;
}

const Lozenges = forwardRef<HTMLDivElement, LozengesProps>(
    ({ text, className, variant, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(lozengesVariants({ variant, className }))}
                {...props}
            >
                {text}
            </div>
        );
    }
);
export default Lozenges;
export { Lozenges, lozengesVariants };
