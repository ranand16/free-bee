module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-actions",
        "storybook-addon-themes",
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-styling",
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
    previewHead: (head) => `
        ${head}
        ${'<link rel="stylesheet" href="./sb-common-assets/app.min.css" />'}
    `,
};
//  previewHead is being used to add a static file(not statci initially, but it is postcssed and then put into this location using package json build-storybook command )
