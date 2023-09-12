import { Meta } from "@storybook/react";
import * as React from "react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

export default {
    titile: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Tooltip>;

export const TopTooltip = () => {
    const peer = "topTT";
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`${peer} peer`}
                    id={peer}
                    aria-describedby={peer}
                />
                <Tooltip peerClass={peer} content="Tooltip" tipPosition="top" />
            </div>
        </div>
    );
};

export const RightTooltip = () => {
    const peer = "pert";
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`pert peer`}
                    // className={`${peer} peer`}
                    id={"pert"}
                    // id={peer}
                    aria-describedby={"pert"}
                    // aria-describedby={peer}
                />
                <Tooltip
                    peerClass={"pert"}
                    // peerClass={peer}
                    content="Tooltip"
                    tipPosition="right"
                />
            </div>
        </div>
    );
};

export const BottomTooltip = () => {
    const peer = "bottomTT";
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`${peer} peer`}
                    id={peer}
                    aria-describedby={peer}
                />
                <Tooltip
                    peerClass={peer}
                    content="Tooltip"
                    tipPosition="bottom"
                />
            </div>
        </div>
    );
};

export const LeftTooltip = () => {
    const peer = "leftTT";
    return (
        <div className="h-16 w-20">
            <div className="relative">
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
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`${peer} peer`}
                    id={peer}
                    aria-describedby={peer}
                />
                <Tooltip
                    peerClass={peer}
                    content="Tooltip"
                    tipPosition="left"
                />
            </div>
        </div>
    );
};
