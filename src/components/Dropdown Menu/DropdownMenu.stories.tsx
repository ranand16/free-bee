import * as React from "react";
import DropdownMenu from "./DropdownMenu";
import { Meta } from "@storybook/react";
import DropdownMenuItemGroup from "./DropdownMenuItemGroup";
import DropdownMenuItem from "./DropdownMenuItem";

export default {
    title: "Components/DropdownMenu",
    component: DropdownMenu,
} as Meta<typeof DropdownMenu>;

export const DropdownMenuComponent = () => {
    const [selected, setSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const dropdownMenuItemsRef = React.useRef<any>(null);
    const btnRef = React.useRef<any>(null);

    const toggleNow = React.useCallback((e: any) => {
        setSelected((prevState) => !prevState);
        setOpen((prevState) => !prevState);
    }, []);

    const handler = (event: MouseEvent) => {
        if (!dropdownMenuItemsRef.current) return;
        if (
            !dropdownMenuItemsRef.current.contains(event.target) &&
            !btnRef.current.contains(event.target)
        ) {
            setSelected(false);
            setOpen(false);
        }
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);

    return (
        <div className="relative">
            {/** This needs to have a height while use */}
            <DropdownMenu
                ref={btnRef}
                open={open}
                selected={selected}
                callback={toggleNow}
                label={"Page actions"}
            >
                <DropdownMenuItemGroup ref={dropdownMenuItemsRef}>
                    <DropdownMenuItem label="Edit" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Move" />
                    <DropdownMenuItem label="Clone" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Delete" />
                    <DropdownMenuItem label="Report" />
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 cursor-pointer dark:text-white hover:bg-default-bold dark:hover:text-white dark:hover:bg-neutral-subtle-hovered"
                        type="button"
                    >
                        <span className="">
                            <span className="">
                                <span className="" data-item-title="true">
                                    Edit
                                </span>
                            </span>
                        </span>
                    </button>
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};

export const DropdownMenuComponentButtonDescription = () => {
    const [selected, setSelected] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const dropdownMenuItemsRef = React.useRef<any>(null);
    const btnRef = React.useRef<any>(null);

    const toggleNow = React.useCallback((e: any) => {
        setSelected((prevState) => !prevState);
        setOpen((prevState) => !prevState);
    }, []);

    const handler = (event: MouseEvent) => {
        if (!dropdownMenuItemsRef.current) return;
        if (
            !dropdownMenuItemsRef.current.contains(event.target) &&
            !btnRef.current.contains(event.target)
        ) {
            setSelected(false);
            setOpen(false);
        }
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);

    return (
        <div className="relative">
            {/** This needs to have a height while use */}
            <DropdownMenu
                ref={btnRef}
                open={open}
                selected={selected}
                callback={toggleNow}
                label={"Page actions"}
            >
                <DropdownMenuItemGroup ref={dropdownMenuItemsRef}>
                    <DropdownMenuItem
                        label="Edit"
                        description="Previous edits were saved"
                    />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Move" />
                    <DropdownMenuItem label="Clone" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Delete" />
                    <DropdownMenuItem label="Report" />
                    <button
                        role="menuitem"
                        className="relative flex box-border w-full min-h-[40px] m-0 items-center text-sm outline-[0px] no-underline select-none py-2 px-4 cursor-pointer dark:text-white hover:bg-default-bold dark:hover:text-white dark:hover:bg-neutral-subtle-hovered"
                        type="button"
                    >
                        <span className="">
                            <span className="">
                                <span className="" data-item-title="true">
                                    Edit
                                </span>
                            </span>
                        </span>
                    </button>
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};
