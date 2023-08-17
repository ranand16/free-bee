import * as React from "react";
import { Meta } from "@storybook/react";
import TextButton from "./TextButton";

export default {
    title: "Components/Button",
    component: TextButton,
} as Meta<typeof TextButton>;

export const Submit = () => <TextButton label="Submit" />;

export const Check = () => <TextButton label="Check" />;
