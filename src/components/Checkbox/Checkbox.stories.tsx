import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
} as Meta<typeof Checkbox>;

export const DefaultCheckbox = () => <Checkbox labelText="Check me" />;

export const DisabledCheckbox = () => (
    <Checkbox labelText="Check me" disabled />
);

export const SizeCheckbox = () => (
    <div>
        <Checkbox size={"sm"} labelText="Small checkbox" />
        <br />
        <Checkbox size={"md"} labelText="Medium checkbox" />
        <br />
        <Checkbox size={"lg"} labelText="large checkbox" />
        <br />
        <Checkbox size={"xl"} labelText="Extra large checkbox" />
        <br />
        <Checkbox labelText="Check me" />
    </div>
);
