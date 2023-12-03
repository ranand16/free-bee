import * as React from "react";

export interface DropdownMenuItemsProps {}

const DropdownMenuItems = React.forwardRef<
    HTMLDivElement,
    DropdownMenuItemsProps
>(({}, ref) => {
    return (
        <div
            id=""
            ref={ref}
            data-placement="bottom-start"
            tabIndex={0}
            className="fixed block box-border my-0 p-0 ml-3 mt-12 bg-white shadow-light-box overflow-auto z-[400]"
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
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Edit
                                </span>
                            </span>
                        </span>
                    </button>
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Share
                                </span>
                            </span>
                        </span>
                    </button>
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Move
                                </span>
                            </span>
                        </span>
                    </button>
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Clone
                                </span>
                            </span>
                        </span>
                    </button>
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Delete
                                </span>
                            </span>
                        </span>
                    </button>
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 bg-transparent cursor-pointer"
                        type="button"
                    >
                        <span className="css-13ccqna">
                            <span className="css-1tojcmu">
                                <span
                                    className="css-1sdjnkx"
                                    data-item-title="true"
                                >
                                    Report
                                </span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default DropdownMenuItems;
