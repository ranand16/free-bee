import * as React from "react";
import { Meta } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BreadcrumbsItem from "./BreadcrumbItem";
import Button from "../Button";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Breadcrumbs>;

export const Standard = () => (
  <Breadcrumbs>
    <BreadcrumbsItem href="./" text="Item 1" />
    <BreadcrumbsItem href="./" text="Item 2" />
    <BreadcrumbsItem href="./" text="Item 3" />
    <BreadcrumbsItem href="./" text="Item 4" />
    <BreadcrumbsItem href="./" text="Item 5" />
  </Breadcrumbs>
);

export const MaxBreadcrumbItems = () => (
  <Breadcrumbs maxItems={5}>
    <BreadcrumbsItem href="./" text="Item 1" />
    <BreadcrumbsItem href="./" text="Item 2" />
    <BreadcrumbsItem href="./" text="Item 3" />
    <BreadcrumbsItem href="./" text="Item 4" />
    <BreadcrumbsItem href="./" text="Item 5" />
    <BreadcrumbsItem href="./" text="Item 6" />
    <BreadcrumbsItem href="./" text="Item 7" />
    <BreadcrumbsItem href="./" text="Item 8" />
    <BreadcrumbsItem href="./" text="Item 9" />
    <BreadcrumbsItem href="./" text="Item 10" />
  </Breadcrumbs>
);

