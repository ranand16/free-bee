import "../src/styles/tailwind.css"; // replace with the name of your tailwind css file
// import { withThemeByClassName } from "@storybook/addon-styling";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    globalTypes: {
        darkMode: {
            defaultValue: true, // Enable dark mode by default on all stories
        },
        // Optional (Default: 'dark')
        className: {
            defaultValue: "dark", // Set your custom dark mode class name
        },
    },
};

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: "light",
            dark: "dark",
        },
        defaultTheme: "light",
        attributeName: "data-bs-theme",
    }),
];

// export const decorators = [
//     withThemeByClassName({
//         themes: {
//             light: "",
//             dark: "dark",
//         },
//         defaultTheme: "light",
//     }),
// ];
