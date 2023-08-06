import TextButton from "./TextButton";
import { ComponentMeta } from "@storybook/react";

export default {
    title: "Components/Button",
    component: TextButton,
} as ComponentMeta<typeof TextButton>;

export const Submit = () => <TextButton label="Submit" />;

export const Check = () => <TextButton label="Check" />;
