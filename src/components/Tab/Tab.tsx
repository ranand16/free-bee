import * as React from "react";
import { HTMLAttributes, ChangeEventHandler, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const TagVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface InputFieldProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof TagVariants> {
    onChange: ChangeEventHandler<HTMLDivElement>;
}

const Tabs = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ onChange }, ref) => {
        // const
        return <div className={""}></div>;
    }
);

export default Tabs;
