import { Meta } from "@storybook/react";
import * as React from "react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

export default {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Tooltip>;

export const TopTooltip = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={"topTT peer"}
                    id={"topTT"}
                    aria-describedby={"topTT"}
                />
                <Tooltip
                    key={"topTT"}
                    peerClass={"topTT"}
                    content="Tooltip"
                    tipPosition="top"
                />
            </div>
        </div>
    );
};

export const RightTooltip = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={"pert peer"}
                    id={"pert"}
                    aria-describedby={"pert"}
                />
                <Tooltip
                    key={"pert"}
                    peerClass={"pert"}
                    content="Tooltip"
                    tipPosition="right"
                />
            </div>
        </div>
    );
};

export const BottomTooltip = () => {
    // const peer = "bottomTT";
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`bottomTT peer`}
                    id={"bottomTT"}
                    aria-describedby={"bottomTT"}
                />
                <Tooltip
                    key={"bottomTT"}
                    peerClass={"bottomTT"}
                    content="Tooltip"
                    tipPosition="bottom"
                />
            </div>
        </div>
    );
};

export const LeftTooltip = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Hover me"
                    className={`leftTT peer`}
                    id={"leftTT"}
                    aria-describedby={"leftTT"}
                />
                <Tooltip
                    key={"leftTT"}
                    peerClass={"leftTT"}
                    content="Tooltip"
                    tipPosition="left"
                />
            </div>
        </div>
    );
};
