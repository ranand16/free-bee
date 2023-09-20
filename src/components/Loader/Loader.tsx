import * as React from "react";
import { clsx } from "clsx";
import { cn } from "../../utility/functions";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loader = ({ className: cln }: LoaderProps) => {
    return (
        <svg
            className={cn(
                cln,
                "loader fill-none stroke-current absolute left-0 bottom-0 right-0 top-0 p-1"
            )}
            style={{
                width: "inherit",
                height: "inherit",
            }}
            focusable="false"
            // size="50"
            // height={height}
            // width={width}
            viewBox="0 0 50 50"
        >
            <circle cx="25" cy="25" r="22.5"></circle>
        </svg>
    );
};

export default Loader;
