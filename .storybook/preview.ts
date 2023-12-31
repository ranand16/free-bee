import "../src/styles/tailwind.css"; // replace with the name of your tailwind css file
import "@fontsource/roboto/300.css"; // importing material icons and font in storybook, note that this will be budled along with storybook build.
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        clearable: false,
        list: [
            {
                name: "Light",
                class: [],
                color: "#ffffff",
                default: true,
            },
            {
                name: "Dark",
                class: ["dark"],
                color: "#1D2125",
            },
        ],
    },
    backgrounds: {
        default: "Light",
        values: [
            {
                name: "Light",
                value: "#ffffff",
            },
            {
                name: "Dark",
                value: "#1D2125",
            },
        ],
    },
};
