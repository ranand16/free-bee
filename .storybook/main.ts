module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    staticDirs: ["../pub"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-actions",
        "storybook-addon-themes",
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-styling-webpack",
            options: {
                // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
                // For more details on this addon's options.
                postCss: {
                    implementation: require.resolve("postcss"),
                },
            },
        },
    ],
    docs: {
        autodocs: true,
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
};
