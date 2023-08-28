import * as React from "react";
import { Meta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
} as Meta<typeof Button>;

export const Submit = () => <Button label="Submit" />;

export const Check = () => <Button label="Check" />;
