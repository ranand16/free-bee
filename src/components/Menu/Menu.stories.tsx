import { Meta } from "@storybook/react";
import Menu from "./Menu";
import MenuButtonItem from "./MenuButtonItem";
import MenuGroup from "./MenuGroup";
import MenuSection from "./MenuSection";
import MenuSectionHeader from "./MenuHeader";

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

export const MenuSectionE = () => {
    return (
        <MenuGroup>
            <MenuSection>
                <MenuSectionHeader>Starred</MenuSectionHeader>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
            <MenuSection>
                <MenuSectionHeader>Recent</MenuSectionHeader>
                <MenuButtonItem
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                    description="Create a new article by clicking here"
                >
                    Create Article
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
        </MenuGroup>
    );
};

export const MenuSectionESeparater = () => {
    return (
        <MenuGroup>
            <MenuSection>
                <MenuSectionHeader>Starred</MenuSectionHeader>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
            <MenuSection isSeparated>
                <MenuSectionHeader>Recent</MenuSectionHeader>
                <MenuButtonItem
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                    description="Create a new article by clicking here"
                >
                    Create Article
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
        </MenuGroup>
    );
};

export const MenuSectionEScroll = () => {
    return (
        <MenuGroup>
            <MenuSection isScrollable>
                <MenuSectionHeader>Starred</MenuSectionHeader>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
            <MenuSection title="recent" isSeparated>
                <MenuSectionHeader>Recent</MenuSectionHeader>
                <MenuButtonItem
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                    description="Create a new article by clicking here"
                >
                    Create Article
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
        </MenuGroup>
    );
};

export const MenuSectionEScrollNoHead = () => {
    return (
        <MenuGroup>
            <MenuSection isScrollable>
                <MenuSectionHeader>Starred</MenuSectionHeader>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem
                    description="Create a new article by clicking here"
                    imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png"
                >
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
            <MenuSection title="recent" isSeparated>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create Article
                </MenuButtonItem>
                <MenuButtonItem imageBeforeSrc="https://atlassian.design/static/yeti-431a34948cc7a27584cea6a4aabf9bde1134ec656a077c710eff01d0a52b743b.png">
                    Create new menu
                </MenuButtonItem>
            </MenuSection>
        </MenuGroup>
    );
};
