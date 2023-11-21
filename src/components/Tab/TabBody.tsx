import * as React from "react";
import { HTMLAttributes } from "react";
import { cn } from "../../utility/functions";

export interface TabBodyProps extends HTMLAttributes<HTMLDivElement> {}

const TabBody = ({ children, className, ...props }: TabBodyProps) => {
    return (
        <section className={cn("", className)} {...props}>
            <nav>{children}</nav>
        </section>
    );
};

export default TabBody;
