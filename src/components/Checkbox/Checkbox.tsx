"use client";
import { FC } from "react";

interface CheckboxProps {}

const Checkbox: FC<CheckboxProps> = () => {
    return (
        <label className="">
            <input
                type="checkbox"
                name="checkbox-default"
                aria-checked="false"
                className=""
                value="default checkbox"
            />
            <svg
                viewBox="0 0 24 24"
                role="presentation"
                className=""
                style={{
                    color: "var(--checkbox-background-color)",
                    fill: "var(--checkbox-tick-color)",
                }}
            >
                <g fill-rule="evenodd">
                    <rect
                        fill="currentColor"
                        x="6"
                        y="6"
                        width="12"
                        height="12"
                        rx="2"
                    ></rect>
                </g>
            </svg>
            <span className="">Default checkbox</span>
        </label>
    );
};

export default Checkbox;
