import * as React from "react";
import DropdownMenuItem from "./DropdownMenuItem";

export interface DropdownMenuItemGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownMenuItemGroup = React.forwardRef<
    HTMLDivElement,
    DropdownMenuItemGroupProps
>(({ children }, ref) => {
    return (
        <div
            id=""
            ref={ref}
            data-placement="bottom-start"
            tabIndex={0}
            className="absolute top-0 left-0 block box-border my-0 p-0 mt-10 bg-white dark:bg-overlay shadow-light-box overflow-auto z-[400]"
            style={{
                inset: "0px auto auto 0px",
            }}
        >
            <div
                aria-busy="false"
                role="menu"
                className="max-w-screen-md flex static flex-col overflow-auto"
                style={{
                    maxHeight: "calc(100vh - 16px)",
                    boxSizing: "inherit",
                }}
            >
                <div
                    className="shrink-0 m-0 p-0 block before:block before:h-[6px] before:content-[''] after:block after:h-[6px] after:content-['']"
                    role="group"
                    data-section="true"
                    style={{ boxSizing: "inherit" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
});

export default DropdownMenuItemGroup;
