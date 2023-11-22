import * as React from "react";
import { AnchorHTMLAttributes } from "react";
import { cn } from "../../utility/functions";

export interface TabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    selected: Boolean;
}

const Tab = ({ children, selected, className, id, ...props }: TabProps) => {
    return (
        <a
            className={cn(
                "tab-item text-sm relative whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer leading-7 m-0 py-1 px-2 text-subtle dark:text-subtle-old after:hover:content-[''] after:hover:rounded-sm after:hover:bottom-0 after:hover:m-0 after:hover:absolute after:hover:left-2 after:hover:right-2 after:hover:border-b-2 after:hover:border-b-input-hovered dark:after:hover:border-b-primary",
                {
                    "text-selected-tab dark:text-selected-tab-dark after:w-auto after:content-[''] after:absolute after:rounded-sm after:bottom-0 after:m-0 after:left-2 after:right-2 after:border-b-2 after:border-brand-bold after:hover:border-b-2 after:hover:border-brand-bold dark:after:hover:border-brand-bold":
                        selected,
                },
                className
            )}
            id={id}
            {...props}
        >
            {children}
        </a>
    );
};

export default Tab;
