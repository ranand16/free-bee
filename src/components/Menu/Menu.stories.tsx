import { Meta } from "@storybook/react";
import Menu from "./Menu";

export default {
    title: "Components/Menu",
    component: Menu,
    argTypes: {},
} as Meta<typeof Menu>;

export const Standard = () => {
    return <Menu />;
};
