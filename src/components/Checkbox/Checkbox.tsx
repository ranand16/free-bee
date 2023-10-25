"use client";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "../../utility/functions";

const checkboxVariants = cva("", {
    variants: {
        size: {
            default: "w-6 h-6 p-1 border-2 peer-checked:border-2",
            sm: "w-4 h-4 p-1 border-2 peer-checked:border-2",
            md: "w-6 h-6 p-1 border-2 peer-checked:border-2",
            lg: "w-8 h-8 p-[6px] border-[3px] peer-checked:border-[3px]",
            xl: "w-10 h-10 p-2 border-4 peer-checked:border-4",
        },
    },
});

export interface CheckboxProps
    extends HTMLAttributes<HTMLInputElement>,
        VariantProps<typeof checkboxVariants> {
    labelText?: string;
    size?: "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    key?: string;
}

const Checkbox: FC<CheckboxProps> = ({
    id,
    size = "md",
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
                className={cn(
                    checkboxVariants({
                        size,
                        className:
                            "peer relative appearance-none cursor-pointer border-none shrink-0 rounded-[5px] checked:bg-none checked:text-none checked:text-transparent checked:border-0",
                    })
                )}
                type="checkbox"
                id={id}
                disabled={disabled}
                {...props}
            />
            <svg
                viewBox="-279.8961 -92.8879 142.2172 106.4759"
                className={cn(
                    checkboxVariants({
                        size,
                        className:
                            "absolute pointer-events-none rounded-[5px] border-text-input-hovered bg-white stroke-white fill-none peer-focus:border-accent-blue peer-checked:peer-focus:border-accent-blue peer-hover:border-text-input-hovered peer-checked:border-none peer-checked:focus:border-accent-blue-subtle peer-checked:focus:border-1 peer-checked:hover:text-text-input-hovered peer-checked:peer-hover:bg-accent-blue-subtle peer-checked:bg-brand-bold peer-hover:bg-text-input-hovered peer-hover:text-text-input-hovered dark:peer-focus:border-focused-dark dark:peer-checked:peer-focus:border-focused-dark dark:peer-hover:border-primary dark:peer-checked:border-none dark:peer-checked:focus:border-focused-dark dark:peer-checked:hover:text-inverse dark:peer-checked:peer-hover:bg-accent-blue dark:peer-checked:bg-brand-bold-dark dark:peer-hover:bg-input-hovered dark:peer-hover:text-inverse peer-disabled:bg-white peer-disabled:peer-hover:bg-white transition-colors duration-200 ease-in-out",
                    })
                )}
            >
                <path
                    d="M -249.425 -52.126 C -258.912 -61.94 -275.452 -57.832 -279.209 -44.721 C -281.016 -38.426 -279.197 -31.642 -274.483 -27.09 L -239.04 8.384 C -232.128 15.314 -220.904 15.324 -213.981 8.406 L -143.095 -62.417 C -133.289 -71.883 -137.412 -88.428 -150.526 -92.196 C -156.823 -94.009 -163.604 -92.196 -168.153 -87.498 L -226.516 -29.186 L -249.425 -52.126 Z"
                    transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -2.842170943040401e-14)"
                    className="fill-white"
                ></path>
            </svg>
            {labelText && <span>{labelText}</span>}
        </label>
    );
};

export default Checkbox;
