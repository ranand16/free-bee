import React, { useState, forwardRef } from "react";
import Dropdown from "./Dropdown";
import { MultiselectItem } from "./Multiselect.stories";

export interface MultiselectProps {
    items: MultiselectItem[];
    selectedItems: MultiselectItem[];
    setSelected: React.Dispatch<React.SetStateAction<MultiselectItem[]>>;
}

const Multiselect = forwardRef(
    ({ items, selectedItems, setSelected }: MultiselectProps) => {
        // state showing if dropdown is open or closed
        const [dropdown, setDropdown] = useState<boolean>(false);
        // managing dropdown items (list of dropdown items)
        const [currentItems, setCurrentItems] =
            useState<MultiselectItem[]>(items);

        const toogleDropdown = () => {
            setDropdown(!dropdown);
        };
        // adds new item to multiselect
        const addTag = async (item: MultiselectItem) => {
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
        const removeTag = (item: MultiselectItem) => {
            const filtered = selectedItems.filter(
                (e) => e["value"] !== item["value"]
            );
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
                i["value"].includes(event.target.value)
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
                                    <div className="my-2 px-1 flex border-2 dark:border-select2-dark bg-white dark:bg-select2-dark dark:hover:bg-transparent rounded hover:bg-blue-bold-hovered hover:border-form-hover dark:hover:form-hover hover:border-accent-blue focus:border-form-hover transition-bgColor ease-in-out duration-200">
                                        <div className="flex flex-auto flex-wrap">
                                            {selectedItems.map((tag, index) => {
                                                return (
                                                    <div
                                                        key={tag["key"]}
                                                        className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-[3px] text-default dark:text-default-dark bg-default-bold border border-default-bold dark:border-form-hover dark:bg-select2-selected-dark"
                                                    >
                                                        <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                                            {tag["value"]}
                                                        </div>
                                                        <div className="flex flex-auto flex-row-reverse">
                                                            <div
                                                                onClick={() =>
                                                                    removeTag(
                                                                        tag
                                                                    )
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
                                                                    className="feather feather-x cursor-pointer dark:text-default-dark dark:hover:text-accent-red-bolder hover:text-accent-red-bolder rounded-full w-4 h-4 ml-2"
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
                                            className="text-gray-300 w-8 py-1 pl-2 pr-1 rotate-180 flex items-center"
                                            onClick={toogleDropdown}
                                        >
                                            <button className="cursor-pointer w-6 h-6 text-gray-600 dark:text-default-dark outline-none focus:outline-none">
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
    }
);

export default Multiselect;
