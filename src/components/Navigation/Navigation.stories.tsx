import { Meta } from "@storybook/react";
import Navigation from "./Navigation";

export default {
    title: "Components/NavigationComponent",
    component: Navigation,
} as Meta<typeof Navigation>;

export const NavigationComponent = () => {
    return (
        <div className="w-[1500px]">
            <Navigation />
        </div>
    );
};
