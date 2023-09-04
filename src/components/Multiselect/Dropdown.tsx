import React from "react";
import { MultiselectItem } from "./Multiselect.stories";

interface DropdownProps {
    list: MultiselectItem[];
    addItem: (item: MultiselectItem) => void;
}

const Dropdown = ({ list, addItem }: DropdownProps) => {
    return (
        <div
            id="dropdown"
            className="absolute shadow top-100 bg-white dark:bg-flag-dark z-40 w-full lef-0 max-h-select overflow-y-auto "
        >
            <div className="flex flex-col w-full">
                {list.map((item, key) => {
                    return (
                        <div
                            key={item["key"]}
                            className="cursor-pointer w-full border-none text-subtlest hover:text-subtle hover:bg-accent-gray-subtler dark:text-subtlest-dark dark:hover:bg-item-focus-dark dark:hover:text-subtlest-dark"
                            onClick={() => addItem(item)}
                        >
                            <div className="flex items-center p-2 pl-2 border-transparent border-l-2 relative">
                                <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                        {item["value"]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {list.length < 1 && (
                    <div className="w-full border-gray-100 rounded-t border-b">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative ">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">
                                    {"No matches found"}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
