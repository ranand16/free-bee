import { Meta } from "@storybook/react";
import * as React from "react";
import Tooltip from "./Tooltip";

export default {
    titile: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Tooltip>;

export const DefaultTooltip = () => {
    const peer = "pert";
    return (
        <div className="h-80 relative">
            {/* <label id="tp1-label" htmlFor="first">
                First Name:
            </label> */}
            {/* <input
                // className={`pert peer`}
                className={`${peer} peer`}
                id={peer}
                type="text"
                name="first"
                size={20}
                aria-describedby="pert"
            /> */}
            <div className={`${peer} peer`} id={peer} aria-describedby="pert">
                Hover me
            </div>
            <Tooltip
                peerClass={peer}
                // peerClass={"pert"}
                content="This is a tooltip."
                tipPosition="right"
            />
        </div>
    );
};
