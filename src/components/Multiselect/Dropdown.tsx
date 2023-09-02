import React from "react";

interface DropdownProps {
    list: string[];
    addItem: (item: string) => void;
}

const Dropdown = ({ list, addItem }: DropdownProps) => {
    return (
        <div
            id="dropdown"
            className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto "
        >
            <div className="flex flex-col w-full">
                {list.map((item, key) => {
                    return (
                        <div
                            key={key}
                            className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                            onClick={() => addItem(item)}
                        >
                            <div className="flex items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                        {item}
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
