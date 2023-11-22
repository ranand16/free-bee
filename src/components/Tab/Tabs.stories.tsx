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
                        aria-selected={selectedTab == `#${tab["id"]}`}
                        aria-controls={tab["id"]}
                        href={`#${tab["id"]}`}
                        onClick={(e) => e.preventDefault()}
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
                        {/* Your content starts here */}
                        <span className="dark:text-white">{tab["content"]}</span>
                        {/* Your content ends here */}
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
