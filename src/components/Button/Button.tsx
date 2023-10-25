import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";
import Loader from "../Loader/Loader";

const buttonVariants = cva(
    "flex text-active max-w-100 min-w-[122px] justify-center items-center text-sm font-medium rounded px-2.5",
    {
        variants: {
            variant: {
                default:
                    "text-default bg-default-bold active:bg-default-bold-pressed hover:bg-default-bold-hovered focus:bg-default-bold-hovered active:text-primary active:border-transparent dark:text-default-dark dark:bg-default-bold-dark dark:active:bg-default-bold-pressed-dark dark:hover:bg-default-bold-hovered-dark dark:focus:bg-default-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
                primary:
                    "bg-brand-bold active:bg-brand-bold-pressed hover:bg-brand-bold-hovered focus:bg-brand-bold-hovered active:border-transparent dark:bg-brand-bold-dark dark:active:bg-brand-bold-pressed-dark dark:hover:bg-brand-bold-hovered-dark dark:focus:bg-brand-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
                danger: "text-btnactive bg-danger-bold hover:bg-danger-bold-hovered focus:bg-danger-bold-hovered active:bg-danger-bold-pressed active:border-transparent dark:bg-danger-bold-dark dark:active:bg-danger-bold-pressed-dark dark:hover:bg-danger-bold-hovered-dark dark:focus:bg-danger-bold-hovered-dark dark:active:border-transparent-dark disabled:opacity-50",
                link: "p-0 hover:underline focus:underline text-primary",
            },
            size: {
                default: "h-[30px]",
                compact: "h-6",
                full: "w-100 h-[30px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
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
                    <div className="rotate-310 w-full h-full relative">
                        <Loader className="" />
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
