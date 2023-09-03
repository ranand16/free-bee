import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface MultiselectProps {
    items: string[];
}

const Multiselect = ({ items }: MultiselectProps) => {
    // state showing if dropdown is open or closed
    const [dropdown, setDropdown] = useState<boolean>(false);
    // managing dropdown items (list of dropdown items)
    const [currentItems, setCurrentItems] = useState<string[]>(items);
    // contains selected items
    const [selectedItems, setSelected] = useState<string[]>([]);

    const toogleDropdown = () => {
        setDropdown(!dropdown);
    };
    // adds new item to multiselect
    const addTag = async (item: string) => {
        if (selectedItems.indexOf(item) !== -1) return;
        setSelected(() => {
            const newItems = selectedItems.concat(item); // new selected items array value
            const newCurrentFilteredItems = items.filter((e) =>
                newItems.indexOf(e) < 0 ? true : false
            ); // setting non-selected values
            setCurrentItems(newCurrentFilteredItems);
            setDropdown(false);
            return newItems;
        });
    };
    // removes item from multiselect
    const removeTag = (item: string) => {
        const filtered = selectedItems.filter((e) => e !== item);
        setSelected(filtered);
        setCurrentItems([...currentItems, item]);
    };

    const editDropdownInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const currentNonSelItems = items.filter((e) =>
            selectedItems.indexOf(e) < 0 ? true : false
        ); // items - selected items
        if (event.target.value == "") {
            const currentNonSelItems = items.filter((e) =>
                selectedItems.indexOf(e) < 0 ? true : false
            ); // items - selected items
            setCurrentItems(currentNonSelItems);
            return;
        }
        const filteredNewList = currentNonSelItems.filter((i) =>
            i.includes(event.target.value)
        );

        setCurrentItems(filteredNewList);
    };

    return (
        <div className="autcomplete-wrapper">
            <div className="autcomplete">
                <div className="w-full flex flex-col items-center mx-auto relative">
                    <div className="w-full">
                        <div className="flex flex-col items-center relative">
                            <div className="w-full ">
                                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                                    <div className="flex flex-auto flex-wrap">
                                        {selectedItems.map((tag, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-[3px] text-default bg-default-bold border border-default-bold"
                                                >
                                                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                                        {tag}
                                                    </div>
                                                    <div className="flex flex-auto flex-row-reverse">
                                                        <div
                                                            onClick={() =>
                                                                removeTag(tag)
                                                            }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="100%"
                                                                height="100%"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                                            >
                                                                <line
                                                                    x1="18"
                                                                    y1="6"
                                                                    x2="6"
                                                                    y2="18"
                                                                ></line>
                                                                <line
                                                                    x1="6"
                                                                    y1="6"
                                                                    x2="18"
                                                                    y2="18"
                                                                ></line>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="flex-1">
                                            <input
                                                placeholder=""
                                                onClick={toogleDropdown}
                                                onChange={editDropdownInput}
                                                className="bg-transparent p-1 px-2 appearance-none border-none shadow-none outline-none tw-ring-shadow-none focus:tw-ring-shadow-none focus:border-none focus:outline-none focus:shadow-none h-full w-full text-gray-800"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="text-gray-300 w-8 py-1 pl-2 pr-1 border-r rotate-180 flex items-center border-gray-200"
                                        onClick={toogleDropdown}
                                    >
                                        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="100%"
                                                height="100%"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-chevron-up w-4 h-4"
                                            >
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {dropdown ? (
                            <Dropdown
                                list={currentItems}
                                addItem={addTag}
                            ></Dropdown>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Multiselect;
