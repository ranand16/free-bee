import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Toggle from "./Toggle";

export default {
    title: "Components/Toggle",
    component: Toggle,
} as Meta<typeof Toggle>;

export const DefaultToggle = () => <Toggle label="Default toggle" />;
