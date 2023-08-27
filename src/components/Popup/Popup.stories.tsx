import * as React from "react";
import { Meta } from "@storybook/react";
import Popup from "./Popup";

export default {
    title: "Components/Popup",
    component: Popup,
    tags: ["autodocs"],
    argTypes: {
    },
} as Meta<typeof Popup>;

export const Default = () => <Popup />;
