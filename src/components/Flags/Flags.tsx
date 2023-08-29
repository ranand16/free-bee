import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";

const flagVariants = cva("", {
    variants: {
        variant: {
            default: "",
            primary: "",
            danger: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

interface FlagProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof flagVariants> {
    label: string;
}

const Button = forwardRef<HTMLDivElement, FlagProps>(
    ({ label, className, variant, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(flagVariants({ variant, className }))}
                {...props}
            >
                {label}
            </div>
        );
    }
);
export default Button;
export { Button, flagVariants };
