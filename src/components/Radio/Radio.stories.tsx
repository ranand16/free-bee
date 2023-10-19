import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Radio from "./Radio";

export default {
    title: "Components/Radio",
    component: Radio,
} as Meta<typeof Radio>;

export const DefaultRadio = () => (
    <Radio className="" labelClassName="" labelText="Check me" />
);

export const DisabledRadio = () => <Radio labelText="Check me" disabled />;
