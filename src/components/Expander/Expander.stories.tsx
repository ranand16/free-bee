import { Meta } from "@storybook/react";
import Expander from ".";
import { useRef } from "react";

export default {
    title: "Components/Expander",
    component: Expander,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Expander>;

export const DefaultExpander = () => {
    const expanderBtnRef = useRef<any>(null);
    return (
        <Expander ref={expanderBtnRef}>
            <p>
                This is a big paragraph which cannot be fit in one line so we
                have the need for an expander and you should be using a expander
                where ever required. Please insist other as well to make a habit
                of making use of this component whereever required. THanks for
                reading this long. This is a big paragraph which cannot be fit
                in one line so we have the need for an expander and you should
                be using a expander where ever required. Please insist other as
                well to make a habit of making use of this component whereever
                required. THanks for reading this long. This is a big paragraph
                which cannot be fit in one line so we have the need for an
                expander and you should be using a expander where ever required.
                Please insist other as well to make a habit of making use of
                this component whereever required. THanks for reading this long.
                This is a big paragraph which cannot be fit in one line so we
                have the need for an expander and you should be using a expander
                where ever required. Please insist other as well to make a habit
                of making use of this component whereever required. THanks for
                reading this long.
            </p>
        </Expander>
    );
};
