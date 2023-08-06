import TextButton from "./TextButton";
import { Meta } from "@storybook/react";

export default {
    title: "Components/Button",
    component: TextButton,
} as Meta<typeof TextButton>;

export const Submit = () => <TextButton label="Submit" />;

export const Check = () => <TextButton label="Check" />;
