"use client";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "../../utility/functions";

// const radioButtonVariants = cva("", {
//     variants: {
//         size: {
//             default: "w-6 h-6 p-1 border-2 peer-checked:border-2",
//             sm: "w-4 h-4 p-1 border-2 peer-checked:border-2",
//             md: "w-6 h-6 p-1 border-2 peer-checked:border-2",
//             lg: "w-8 h-8 p-[6px] border-[3px] peer-checked:border-[3px]",
//             xl: "w-10 h-10 p-2 border-4 peer-checked:border-4",
//         },
//     },
// });

export interface RadioButtonProps
    extends InputHTMLAttributes<HTMLInputElement> {
    // VariantProps<typeof radioButtonVariants> {
    labelText?: string;
    disabled?: boolean;
    labelClassName?: string;
    key?: string;
}

const Checkbox: FC<RadioButtonProps> = ({
    id,
    labelText,
    disabled = false,
    className,
    labelClassName,
    key,
    ...props
}) => {
    return (
        <label
            className="w-full flex items-center gap-2 cursor-pointer select-none relative"
            htmlFor={id}
            key={key}
        >
            <input
                // className={cn(
                //     radioButtonVariants({
                //         className:
                //             "peer relative appearance-none cursor-pointer border-none shrink-0 rounded-[5px] checked:bg-none checked:text-none checked:text-transparent checked:border-0",
                //     })
                // )}
                className={cn(
                    className,
                    "scale-[0.583] transform-gpu relative m-0 bg-white border-2 rounded-full border-input-hovered checked:bg-none checked:border-brand-bold checked:bg-brand-bold flex items-center justify-center w-6 h-6 appearance-none outline-none after:opacity-0 checked:after:opacity-100 after:w-[6.85714px] after:h-[6.85714px] after:absolute after:dark:bg-black after:bg-white after:content-[''] after:checked:content-[''] after:rounded-full after:checked:shadow-radio-box"
                )}
                type="radio"
                id={id}
                disabled={disabled}
                {...props}
            />
            {labelText && (
                <span className={cn(labelClassName, "dark:text-white")}>
                    {labelText}
                </span>
            )}
        </label>
    );
};

export default Checkbox;
