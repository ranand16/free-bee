import * as React from "react";
import { Meta } from "@storybook/react";
import Tag from "./Tag";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Tag>;

export const Standard = () => (
  <Tag label="Tag"/>
);

export const LinkTag = () => (
  <Tag label="Tag Link" href="/" />
);