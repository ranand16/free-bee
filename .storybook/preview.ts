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
};

// export const decorators = [
//     withThemeByClassName({
//         themes: {
//             light: "",
//             dark: "dark",
//         },
//         defaultTheme: "light",
//     }),
// ];

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
