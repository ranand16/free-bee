import * as React from "react";
import { Meta } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof TextArea>;

export const Standard = () => (
  <TextArea
    variant={"standard"}
    label="Standard TextArea"
  />
);

export const Subtle = () => <TextArea variant={"subtle"} />;

export const Transparent = () => (
  <TextArea
    variant={"transparent"}
    helperMessage="Help or instruction text goes here"
  />
);
export const WithHorizontalResize = () => (
  <TextArea
    variant={"standard"}
    label="Standard TextArea"
    resize={"horizontal"}
    helperMessage="Help or instruction text goes here"
  />
);

export const WithVerticalResize = () => (
  <TextArea
    variant={"standard"}
    label="Standard TextArea"
    resize={"vertical"}
    helperMessage="Help or instruction text goes here"
  />
);
