import * as React from "react";
import RatingStar from "../Components/RatingStar";
import { Meta } from "@storybook/react";

export default {
    title: "Components/Rating",
    component: RatingStar,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof RatingStar>;

export const Default = () => <RatingStar />;
