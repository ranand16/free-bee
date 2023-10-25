import * as React from "react";
import { InputHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const InputFieldVariants = cva(
    "text-sm text-subtle dark:text-subtle-old box-border px-space.075 py-space.100 border-input-border border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered transition-colors duration-200 ease-in-out",
    {
        variants: {
            variant: {
                standard:
                    "text-sm text-subtle box-border px-space.075 py-space.100 border-input-border border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
                subtle: "text-sm text-subtle box-border px-space.075 py-space.100 border-[#091E4224] border-0 hover:border-2 focus-within:border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
                transparent:
                    "text-sm text-subtle box-border px-space.075 py-space.100 border-[#091E4224] border-0 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
            },
            iconPosition: {
                start: "pl-[32px]",
                end: " pr-[32px]",
            },
        },
        defaultVariants: {
            variant: "standard",
        },
    }
);

export interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof InputFieldVariants> {
    label?: string;
    helperMessage?: string;
    icon?: any;
    iconPosition?: any;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    (
        {
            label,
            helperMessage,
            className,
            variant,
            icon,
            iconPosition,
            ...props
        },
        ref
    ) => {
        return (
            <div className="input-field" ref={ref}>
                <div className="inputfield-container">
                    <div className="text-xs font-semibold mb-space.050 text-subtle dark:text-subtle-old">
                        {label}
                    </div>
                    <div className="relative">
                        <input
                            name="basic"
                            id="basic-inputfield"
                            placeholder={icon ? "" : "Write Something!!"}
                            className={cn(
                                InputFieldVariants({
                                    variant,
                                    className,
                                    iconPosition,
                                })
                            )}
                            {...props}
                        ></input>
                        {iconPosition == "start" ? (
                            <div className="absolute top-space.050 left-space.100">
                                {icon}
                            </div>
                        ) : (
                            ""
                        )}
                        {iconPosition == "end" ? (
                            <div className="absolute top-space.050 right-space.100">
                                {icon}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="text-xs mt-space.050 text-subtle dark:text-subtle-old">
                        {helperMessage}
                    </div>
                </div>
            </div>
        );
    }
);

export default InputField;
