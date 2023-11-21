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
                { "!text-selectedtab": selected },
                "tab-item text-sm relative whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer leading-7 m-0 py-1 px-2 text-subtle after:hover:content-[''] after:hover:rounded-sm after:hover:bottom-0 after:hover:m-0 after:hover:absolute after:hover:left-2 after:hover:right-2 after:hover:border-b-2 after:hover:border-b-input-hovered ",
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
