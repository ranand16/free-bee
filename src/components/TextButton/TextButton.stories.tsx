import * as React from "react";
import { Meta } from "@storybook/react";
import TextButton from "./TextButton";

export default {
    title: "Components/Button",
    component: TextButton,
} as Meta<typeof TextButton>;

export const Submit = () => <TextButton theme="light" label="Submit" />;

export const Check = () => <TextButton theme="light" label="Check" />;
