import * as React from "react";
import { Meta } from "@storybook/react";
import Lozenges from "./Lozenges";

export default {
    title: "Components/Lozenges",
    component: Lozenges,
} as Meta<typeof Lozenges>;

export const PrimaryFlag = () => (
    <Lozenges variant={"primary"} text="Primary" />
);
export const DefaultFlag = () => (
    <Lozenges variant={"default"} text="Default" />
);
export const SuccessFlag = () => (
    <Lozenges variant={"success"} text="Success" />
);
export const DangerFlag = () => <Lozenges variant={"danger"} text="Danger" />;
export const WarningFlag = () => (
    <Lozenges variant={"warning"} text="Warning" />
);

export const PrimaryFlagSubtle = () => (
    <Lozenges variant={"primary-subtler"} text="Primary" />
);
export const DefaultFlagSubtle = () => (
    <Lozenges variant={"default-subtler"} text="Default" />
);
export const SuccessFlagSubtle = () => (
    <Lozenges variant={"success-subtler"} text="Success" />
);
export const DangerFlagSubtle = () => (
    <Lozenges variant={"danger-subtler"} text="Danger" />
);
export const WarningFlagSubtle = () => (
    <Lozenges variant={"warning-subtler"} text="Warning" />
);
