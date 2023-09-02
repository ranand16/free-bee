import * as React from "react";
import { Meta } from "@storybook/react";
import Multiselect from "./Multiselect";

export default {
    title: "Components/Multiselect",
    component: Multiselect,
} as Meta<typeof Multiselect>;

export const MultiselectComponent = () => (
    <div className="h-[300px]">
        <Multiselect />
    </div>
);
