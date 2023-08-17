import * as React from "react";
import { Meta } from "@storybook/react";
import RatingStar from "./RatingStar";

export default {
    title: "Components/Rating",
    component: RatingStar,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof RatingStar>;

export const Default = () => <RatingStar />;
