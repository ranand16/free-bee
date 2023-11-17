import * as React from "react";
import { Meta } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import BreadcrumbItem from "./BreadcrumbItem";
import Button from "../Button";

export default {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Breadcrumbs>;

export const Standard = () => (
    <Breadcrumbs>
        <BreadcrumbItem href="./" text="Item 1" />
        <BreadcrumbItem href="./" text="Item 2" />
        <BreadcrumbItem href="./" text="Item 3" />
        <BreadcrumbItem href="./" text="Item 4" />
        <BreadcrumbItem href="./" text="Item 5" />
    </Breadcrumbs>
);

export const MaxBreadcrumbItems = () => (
    <Breadcrumbs maxItems={5}>
        <BreadcrumbItem href="./" text="Item 1" />
        <BreadcrumbItem href="./" text="Item 2" />
        <BreadcrumbItem href="./" text="Item 3" />
        <BreadcrumbItem href="./" text="Item 4" />
        <BreadcrumbItem href="./" text="Item 5" />
        <BreadcrumbItem href="./" text="Item 6" />
        <BreadcrumbItem href="./" text="Item 7" />
        <BreadcrumbItem href="./" text="Item 8" />
        <BreadcrumbItem href="./" text="Item 9" />
        <BreadcrumbItem href="./" text="Item 10" />
    </Breadcrumbs>
);
