import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { ButtonHTMLAttributes, forwardRef, FC } from "react";
import { cn } from "../../utility/functions";

const buttonVariants = cva(
    "text-active leading-prime text-sm font-medium rounded px-2.5",
    {
        variants: {
            variant: {
                default:
                    "text-default bg-default-bold active:bg-default-bold-pressed hover:bg-default-bold-hovered active:text-primary active:border-transparent dark:text-default-dark dark:bg-default-bold-dark dark:active:bg-default-bold-pressed-dark dark:hover:bg-default-bold-hovered-dark dark:active:border-transparent-dark",
                primary:
                    "bg-brand-bold active:bg-brand-bold-pressed hover:bg-brand-bold-hovered active:border-transparent dark:bg-brand-bold-dark dark:active:bg-brand-bold-pressed-dark dark:hover:bg-brand-bold-hovered-dark dark:active:border-transparent-dark",
                danger: "text-btnactive bg-danger-bold hover:bg-danger-bold-hovered active:bg-danger-bold-pressed active:border-transparent dark:bg-danger-bold-dark dark:active:bg-danger-bold-pressed-dark dark:hover:bg-danger-bold-hovered-dark dark:active:border-transparent-dark",
            },
            size: {
                default: "",
                sm: "h-8",
                md: "h-9",
                lg: "h-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    label: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ label, className, size, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            >
                {label}
            </button>
        );
    }
);
export default Button;
export { Button, buttonVariants };
