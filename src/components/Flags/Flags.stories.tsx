import * as React from "react";
import { Meta } from "@storybook/react";
import Button from "./Flags";

export default {
    title: "Components/Button",
    component: Button,
} as Meta<typeof Button>;

export const DefaultButton = () => (
    <Button variant={"default"} label="Default button" />
);

export const PrimaryButton = () => (
    <Button variant={"primary"} label="Primary button" />
);
export const DangerButton = () => (
    <Button variant={"danger"} label="Danger button" />
);
