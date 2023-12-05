import * as React from "react";
import DropdownMenu from "./DropdownMenu";
import { Meta } from "@storybook/react";
import DropdownMenuItems from "./DropdownMenuItems";

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
                <DropdownMenuItems ref={dropdownMenuItemsRef} />
            </DropdownMenu>
        </div>
    );
};
