import * as React from "react";
import { Meta } from "@storybook/react";
import InputField from "./InputField";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

export default {
  title: "Forms/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof InputField>;

export const Standard = () => (
  <InputField
    variant={"standard"}
    label="Standard Input"
  />
);

export const Subtle = () => <InputField variant={"subtle"} />;

export const Transparent = () => (
  <InputField
    variant={"transparent"}
    helperMessage="Help or instruction text goes here"
    iconPosition="end"
    icon={<AccessibilityIcon color="disabled" />}
  />
);

export const WithIconAtStart = () => (
  <InputField
    variant={"standard"}
    label="Standard Input"
    helperMessage="Help or instruction text goes here"
    iconPosition="start"
    icon={<AccessibilityIcon color="disabled" />}
  />
);

export const WithIconAtEnd = () => (
    <InputField
      variant={"standard"}
      label="Standard Input"
      helperMessage="Help or instruction text goes here"
      iconPosition="end"
      icon={<AccessibilityIcon color="disabled" />}
    />
  );

export const WithHelper = () => (
  <InputField
    variant={"standard"}
    label="Standard Input"
    helperMessage="Help or instruction text goes here"
  />
);
