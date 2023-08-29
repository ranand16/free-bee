import "../src/styles/tailwind.css"; // replace with the name of your tailwind css file

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
                color: "#000000",
            },
        ],
    },
    backgrounds: {
        default: "Light",
        values: [
            {
                name: "Dark",
                value: "#000000",
            },
            {
                name: "Light",
                value: "#ffffff",
            },
        ],
    },
};
