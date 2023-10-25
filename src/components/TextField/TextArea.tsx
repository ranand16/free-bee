import * as React from "react";
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const TextAreaVariants = cva(
    "text-sm focus:shadow-none focus:ring-0 text-subtle dark:text-subtle-old box-border px-space.075 py-space.100 border-input-border border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered transition-colors duration-200 ease-in-out",
    {
        variants: {
            variant: {
                standard:
                    "text-sm text-subtle box-border px-space.075 py-space.100 border-input-border border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
                subtle: "text-sm text-subtle box-border px-space.075 py-space.100 border-[#091E4224] border-0 hover:border-2 focus-within:border-2 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
                transparent:
                    "text-sm text-subtle box-border px-space.075 py-space.100 border-[#091E4224] border-0 rounded hover:bg-text-input-hovered focus:bg-flag dark:bg-input dark:border-[#A6C5E229] dark:focus-within:border-[#85B8FF] dark:caret-[#ffffff] dark:text-[#ffffff] dark:hover:bg-input-hovered",
            },
            resize: {
                auto: "resize",
                horizontal: "resize-x",
                vertical: "resize-y",
            },
        },
        defaultVariants: {
            variant: "standard",
            resize: "auto",
        },
    }
);

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof TextAreaVariants> {
    label?: string;
    helperMessage?: string;
}

const TextArea = forwardRef<HTMLInputElement, TextAreaProps>(
    ({ label, helperMessage, className, variant, resize, ...props }, ref) => {
        return (
            <div className="input-field" ref={ref}>
                <div className="TextArea-container">
                    <div className="text-xs font-semibold mb-space.050 text-subtle dark:text-subtle-old">
                        {label}
                    </div>
                    <div className="relative">
                        <textarea
                            name="basic"
                            id="basic-TextArea"
                            placeholder={"Write Something!!"}
                            className={cn(
                                TextAreaVariants({ variant, className, resize })
                            )}
                            {...props}
                            required
                        ></textarea>
                    </div>
                    <div className="text-xs mt-space.050 text-subtle dark:text-subtle-old">
                        {helperMessage}
                    </div>
                </div>
            </div>
        );
    }
);

export default TextArea;
