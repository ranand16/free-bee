import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
} as Meta<typeof Button>;

export const DefaultButton = () => (
    <Button variant={"default"} label="Default button" loading={false} />
);

export const PrimaryButton = () => (
    <Button variant={"primary"} label="Primary button" loading={false} />
);
export const DangerButton = () => (
    <Button variant={"danger"} label="Danger button" loading={false} />
);
export const LoadingButton = () => {
    const [defaultBtnLoading, setDefault] = useState(false);
    const [primaryLoading, setPrimary] = useState(false);
    const [dangerLoading, setDanger] = useState(false);
    return (
        <>
            <Button
                variant={"default"}
                label="Default button"
                loading={defaultBtnLoading}
                onClick={() => {
                    setDefault(true);
                    setTimeout(() => {
                        setDefault(false);
                    }, 5000);
                }}
            />
            <br />
            <Button
                variant={"primary"}
                label="Primary button"
                loading={primaryLoading}
                onClick={() => {
                    setPrimary(true);
                    setTimeout(() => {
                        setPrimary(false);
                    }, 5000);
                }}
            />
            <br />
            <Button
                variant={"danger"}
                label="Danger button"
                loading={dangerLoading}
                onClick={() => {
                    setDanger(true);
                    setTimeout(() => {
                        setDanger(false);
                    }, 5000);
                }}
            />
        </>
    );
};

export const DifferentSizeButton = () => (
    <div className="w-100">
        <div className="flex">
            <Button
                variant={"primary"}
                size={"default"}
                label="Primary button"
            />
            <Button
                variant={"primary"}
                size={"compact"}
                label="Compact button"
            />
        </div>
        <br />
        <Button variant={"danger"} size={"full"} label="Danger button" />
    </div>
);

export const DisabledButton = () => (
    <div className="w-100">
        <div className="flex">
            <Button
                variant={"primary"}
                size={"default"}
                label="Primary button"
                disabled
            />
            <Button
                variant={"primary"}
                size={"compact"}
                label="Compact button"
                disabled
            />
        </div>
        <br />
        <Button
            variant={"danger"}
            size={"full"}
            label="Danger button"
            disabled
        />
    </div>
);
