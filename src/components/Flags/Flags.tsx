import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";

const flagVariants = cva(
    "text-sm mb-5 w-96 relative rounded text-default bg-flag after:text-center after:flex after:items-center after:justify-center after:w-4 after:h-4 after:rounded-lg after:absolute after:left-6 after:top-6 dark:text-default-dark dark:bg-flag-dark ",
    {
        variants: {
            variant: {
                default: "after:bg-default-bold after:content-['𝐢']",
                success:
                    "after:text-btnactive after:bg-success-icon after:content-['✓']",
                primary:
                    "after:text-btnactive after:bg-brand-bold after:content-['𝐢']",
                danger: "after:text-btnactive after:bg-danger-bold after:content-['!']",
                warning:
                    "after:text-btnactive after:bg-warning-icon after:content-['!']",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

/**
 * This component will be used as container for a flag.
 * This component will have a dynamic icon input and a dynamic close button.
 */

interface FlagProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof flagVariants> {
    closebtn: boolean;
}

const Flags = forwardRef<HTMLDivElement, FlagProps>(
    ({ closebtn, className, variant, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(flagVariants({ variant, className }))}
                {...props}
            >
                <div className={"flex px-[4rem] py-[1.25rem]"}>{children}</div>
                {closebtn && (
                    <button className="absolute top-4 right-8 after:text-md after:text-bolder after:content-['╳']"></button>
                )}
            </div>
        );
    }
);
export default Flags;
export { Flags, flagVariants };
