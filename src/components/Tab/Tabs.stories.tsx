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

export const Standard = () => {
    const [selectedTab, setSelectedTab] = React.useState("tab1");
    const tabsRef = React.useRef<any>(null);

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
                {TABS.map((tab) => (
                    <Tab selected={selectedTab == tab["id"]} id={tab["id"]}>
                        {tab["head"]}
                    </Tab>
                ))}
            </TabList>
            {TABS.map((tab) => (
                <TabPanel
                    selected={selectedTab == tab["id"]}
                    id={tab["contentId"]}
                >
                    {tab["content"]}
                </TabPanel>
            ))}
        </Tabs>
    );
};

const TABS = [
    {
        id: "tab1",
        head: "Tab 1",
        contentId: "tab1-content",
        content: <div>Tab 1 content here</div>,
    },
    {
        id: "tab2",
        head: "Tab 2",
        contentId: "tab2-content",
        content: <div>Tab content 2 </div>,
    },
    {
        id: "tab3",
        head: "Tab 3",
        contentId: "tab3-content",
        content: <div>Tab content 3</div>,
    },
];
