import { Meta } from "@storybook/react";
import Menu from "./Menu";
import MenuButtonItem from "./MenuButtonItem";

export default {
    title: "Components/Menu",
    component: Menu,
    argTypes: {},
} as Meta<typeof Menu>;

export const Standard = () => {
    return <Menu />;
};

export const MenuButtonItemActive = () => {
    return <MenuButtonItem>Activate</MenuButtonItem>;
};

export const MenuButtonItemSelected = () => {
    return <MenuButtonItem isSelected>Activate</MenuButtonItem>;
};

export const MenuButtonItemDisabled = () => {
    return <MenuButtonItem isDisabled>Activate</MenuButtonItem>;
};
