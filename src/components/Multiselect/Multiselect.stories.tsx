import * as React from "react";
import { Meta } from "@storybook/react";
import Multiselect from "./Multiselect";

export default {
    title: "Components/Multiselect",
    component: Multiselect,
} as Meta<typeof Multiselect>;

export const MultiselectComponent = () => (
    <div className="h-[300px]">
        <Multiselect
            items={[
                "john boom",
                "boom",
                "milos",
                "steph",
                "kathreine",
                "stephen",
            ]}
        />
    </div>
);
