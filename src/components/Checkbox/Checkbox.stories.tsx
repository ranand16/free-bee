import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Checkbox from "../Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
} as Meta<typeof Checkbox>;

export const DefaultCheckbox = () => <Checkbox labelText="Check me" />;
