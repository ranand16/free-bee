import Loader from "../Loader/Loader";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";

const buttonVariants = cva(
    "flex text-active max-w-100 min-w-[122px] justify-center items-center text-sm font-medium rounded px-2.5",
    {
        variants: {
            variant: {
                default:
                    "text-default bg-default-bold active:bg-default-bold-pressed hover:bg-default-bold-hovered active:text-primary active:border-transparent dark:text-default-dark dark:bg-default-bold-dark dark:active:bg-default-bold-pressed-dark dark:hover:bg-default-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
                primary:
                    "bg-brand-bold active:bg-brand-bold-pressed hover:bg-brand-bold-hovered active:border-transparent dark:bg-brand-bold-dark dark:active:bg-brand-bold-pressed-dark dark:hover:bg-brand-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
                danger: "text-btnactive bg-danger-bold hover:bg-danger-bold-hovered active:bg-danger-bold-pressed active:border-transparent dark:bg-danger-bold-dark dark:active:bg-danger-bold-pressed-dark dark:hover:bg-danger-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
            },
            size: {
                default: "h-8",
                compact: "h-6 ",
                full: "w-100 h-8",
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
    loading?: boolean;
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ label, loading, className, size, variant, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                disabled={disabled}
                {...props}
            >
                {loading ? (
                    <div className="rotate-310">
                        <Loader
                            className={
                                size == "compact" ? "w-4 h-4" : "w-6 h-6"
                            }
                        />
                    </div>
                ) : (
                    <div>{label}</div>
                )}
            </button>
        );
    }
);
export default Button;
export { Button, buttonVariants };
