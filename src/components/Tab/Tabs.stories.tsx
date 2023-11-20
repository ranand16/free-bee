import * as React from "react";
import { Meta } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import { cn } from "../../utility/functions";

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
                setSelectedTab(selected.id);
            }}
            ref={tabsRef}
            id={"tabs-test"}
        >
            <TabList>
                {TABS.map((tab) => (
                    <Tab
                        selected={selectedTab == tab["id"]}
                        className={cn(
                            selectedTab == tab["id"]
                                ? "relative whitespace-nowrap overflow-hidden text-ellipsis after:w-auto after:content-[''] after:absolute after:rounded-sm after:bottom-0 after:m-0 after:left-2 after:right-2 after:border-b-2 after:border-bold"
                                : ""
                        )}
                        id={tab["id"]}
                    >
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
        content: <div>Tab content 1</div>,
    },
    {
        id: "tab2",
        head: "Tab 2",
        contentId: "tab2-content",
        content: <div>Tab content 2</div>,
    },
    {
        id: "tab3",
        head: "Tab 3",
        contentId: "tab3-content",
        content: <div>Tab content 3</div>,
    },
];
