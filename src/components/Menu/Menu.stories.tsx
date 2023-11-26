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

export const MenuButtonItemActiveImage = () => {
    return (
        <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
            Activate
        </MenuButtonItem>
    );
};

export const MenuButtonItemActiveImageDesc = () => {
    return (
        <MenuButtonItem
            description="Next-gen free-bee project"
            imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
        >
            Activate
        </MenuButtonItem>
    );
};
