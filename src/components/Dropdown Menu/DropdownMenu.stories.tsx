import * as React from "react";
import DropdownMenu from "./DropdownMenu";
import { Meta } from "@storybook/react";
import DropdownMenuItemGroup from "./DropdownMenuItemGroup";
import DropdownMenuItem from "./DropdownMenuItem";
import Avatar from "../Avatar";
import TickIcon from "../Assets/TickIcon";
import MenuSection from "../Menu/MenuSection";
import MenuSectionHeader from "../Menu/MenuHeader";

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
export const DropdownMenuComponentGroup = () => {
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
                    <MenuSection>
                        <MenuSectionHeader className="text-subtle-old">
                            Starred
                        </MenuSectionHeader>
                        <DropdownMenuItem label="Edit" />
                        <DropdownMenuItem label="Share" />
                        <DropdownMenuItem label="Move" />
                    </MenuSection>
                    <MenuSection>
                        <MenuSectionHeader className="text-subtle-old">
                            Categories
                        </MenuSectionHeader>
                        <DropdownMenuItem label="Clone" />
                        <DropdownMenuItem label="Share" />
                        <DropdownMenuItem label="Delete" />
                        <DropdownMenuItem label="Report" />
                    </MenuSection>
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

export const DropdownMenuComponentButtonTitleWrap = () => {
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
                    <DropdownMenuItem
                        labelWrap
                        label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor."
                    />
                    <DropdownMenuItem label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor." />
                    <DropdownMenuItem label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor." />
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};

export const DropdownMenuComponentButtonDescriptionWrap = () => {
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
                    <DropdownMenuItem
                        descriptionWrap
                        label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor."
                        description="Previous edits were saved. This line will be so long that it needs to wrap to next line and tou should be seeing somepart of this sentence wrapped."
                    />
                    <DropdownMenuItem
                        description="Previous edits were saved. This line will be so long that it needs to wrap to next line and tou should be seeing somepart of this sentence wrapped."
                        label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor."
                    />
                    <DropdownMenuItem label="Lorem ipsum: In quis ligula ut massa scelerisque cursus. Nulla et dolor felis. Mauris euismod neque at venenatis tempor." />
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};

export const DropdownMenuComponentButtonDisabled = () => {
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
                        isDisabled
                        label="Edit"
                        description="Previous edits were saved"
                    />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem isDisabled label="Move" />
                    <DropdownMenuItem label="Clone" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Delete" />
                    <DropdownMenuItem label="Report" />
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};

export const DropdownMenuComponentButtonBefore = () => {
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
                    <DropdownMenuItem
                        label="Share"
                        elemBefore={
                            <Avatar
                                size={"sm"}
                                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                            />
                        }
                    />
                    <DropdownMenuItem label="Move" />
                    <DropdownMenuItem label="Clone" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Delete" />
                    <DropdownMenuItem label="Report" />
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};

export const DropdownMenuComponentButtonAfter = () => {
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
                    <DropdownMenuItem label="Share" elemAfter={<TickIcon />} />
                    <DropdownMenuItem
                        label="Move"
                        elemAfter={
                            <TickIcon className="text-accent-red-subtle" />
                        }
                    />
                    <DropdownMenuItem label="Clone" />
                    <DropdownMenuItem label="Share" />
                    <DropdownMenuItem label="Delete" />
                    <DropdownMenuItem label="Report" />
                </DropdownMenuItemGroup>
            </DropdownMenu>
        </div>
    );
};
