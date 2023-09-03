import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Multiselect from "./Multiselect";

export default {
    title: "Components/Multiselect",
    component: Multiselect,
} as Meta<typeof Multiselect>;

export interface MultiselectItem {
    key: string;
    value: string;
}

export const MultiselectComponent = () => {
    const initItems: MultiselectItem[] = [
        { key: "1", value: "The" },
        { key: "2", value: "quick" },
        { key: "3", value: "brown" },
        { key: "4", value: "fox" },
        { key: "5", value: "jumps" },
        { key: "6", value: "over" },
        { key: "7", value: "lazy" },
        { key: "8", value: "dog" },
        { key: "9", value: "Sphinx" },
        { key: "10", value: "of" },
        { key: "11", value: "black" },
        { key: "12", value: "quartz" },
        { key: "13", value: "judge" },
        { key: "14", value: "my" },
        { key: "15", value: "vow" },
    ];
    // contains selected items
    const [selectedItems, setSelected] = useState<MultiselectItem[]>([]);
    return (
        <div className="h-[300px]">
            <Multiselect
                items={initItems}
                selectedItems={selectedItems}
                setSelected={setSelected}
            />
        </div>
    );
};
