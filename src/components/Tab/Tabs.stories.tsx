import * as React from "react";
import { Meta } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import { cn } from "../../utility/functions";
import TabBody from "./TabBody";

export default {
    title: "Components/Tabs",
    component: Tabs,
    argTypes: {},
} as Meta<typeof Tabs>;

export const Standard = () => {
    const [selectedTab, setSelectedTab] = React.useState("#tab1");
    const tabsRef = React.useRef<any>(null);

    return (
        <Tabs
            onTabChange={(selected) => {
                setSelectedTab(`#${selected["href"].split("#")[1]}`);
            }}
            ref={tabsRef}
            id={"tabs-test"}
        >
            <TabList>
                {TABS.map((tab) => (
                    <Tab
                        selected={selectedTab == `#${tab["id"]}`}
                        className={cn(
                            selectedTab == `#${tab["id"]}`
                                ? "after:w-auto after:content-[''] after:absolute after:rounded-sm after:bottom-0 after:m-0 after:left-2 after:right-2 after:border-b-2 after:border-brand-bold  after:hover:border-b-2 after:hover:border-brand-bold"
                                : ""
                        )}
                        aria-selected={selectedTab == `#${tab["id"]}`}
                        aria-controls={tab["id"]}
                        href={`#${tab["id"]}`}
                    >
                        {tab["head"]}
                    </Tab>
                ))}
            </TabList>
            <TabBody>
                {TABS.map((tab) => (
                    <TabPanel
                        selected={selectedTab == `#${tab["id"]}`}
                        id={tab["id"]}
                    >
                        {tab["content"]}
                    </TabPanel>
                ))}
            </TabBody>
        </Tabs>
    );
};

const TABS = [
    {
        id: "tab1",
        head: "Tab 1",
        content: <div>Tab content 1</div>,
    },
    {
        id: "tab2",
        head: "Tab 2",
        content: <div>Tab content 2</div>,
    },
    {
        id: "tab3",
        head: "Tab 3",
        content: <div>Tab content 3</div>,
    },
];
