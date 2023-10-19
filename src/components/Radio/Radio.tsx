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

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    // VariantProps<typeof radioButtonVariants> {
    labelText?: string;
    disabled?: boolean;
    key?: string;
}

const Checkbox: FC<RadioButtonProps> = ({
    id,
    labelText,
    disabled = false,
    key,
    ...props
}) => {
    return (
        <label
            className="w-full flex items-center gap-2 cursor-pointer select-none"
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
                className=""
                type="radio"
                id={id}
                disabled={disabled}
                {...props}
            />
            {labelText && <span>{labelText}</span>}
        </label>
    );
};

export default Checkbox;
