import * as React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import Toggle from "./Toggle";

export default {
    title: "Components/Toggle",
    component: Toggle,
} as Meta<typeof Toggle>;

export const DefaultToggle = () => {
    const [checked, setChecked] = useState(false);
    const toggleNow = React.useCallback((e: any) => {
        setChecked((prevState) => !prevState);
    }, []);
    React.useEffect(() => {
        console.log(checked);
    }, [checked]);
    return (
        <Toggle
            checked={checked}
            data-checked={checked}
            toggle={toggleNow}
            label="Default toggle"
        />
    );
};
