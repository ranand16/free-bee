import * as React from "react";
import { Meta } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";

export default {
    title: "Components/Tabs",
    component: Tabs,
    argTypes: {},
} as Meta<typeof Tabs>;

const TABS = {
    tab1: <div></div>,
    tab2: <div></div>,
    tab3: <div></div>,
};

export const Standard = () => {
    const [selectedTab, setSelectedTab] = React.useState("tab1");
    const tabsRef = React.useRef<null | HTMLDivElement>(null);

    return (
        <Tabs
            onTabChange={(selected) => {
                console.log("selected tab:: ", selected);
                console.log(
                    "tabpanel",
                    tabsRef.current
                    // .getElementsByClassname("tabpanel")
                );
            }}
            ref={tabsRef}
            id={"tabs-test"}
        >
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>
            <TabPanel>ONE</TabPanel>
            <TabPanel>TWO</TabPanel>
            <TabPanel>THREE</TabPanel>
        </Tabs>
    );
};
