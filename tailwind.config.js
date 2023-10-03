const theme = require("./src/utility/theme.json");
let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;
let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
    fontPrimary = theme.fonts.font_family.primary
        .replace(/\+/g, " ")
        .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
    fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
    fontSecondary = theme.fonts.font_family.secondary
        .replace(/\+/g, " ")
        .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
    fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [{ pattern: /^swiper-/ }],
    theme: {
        screens: {
            sm: "540px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "max-h-500": { raw: "(max-height: 500px)" },
        },
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            backgroundColor: theme.colors.default.background,
            colors: {
                text: theme.colors.default.text_color.default,
                light: theme.colors.default.text_color.light,
                dark: theme.colors.default.text_color.dark,
                primary: theme.colors.default.theme_color.primary,
                secondary: theme.colors.default.theme_color.secondary,
                body: theme.colors.default.theme_color.body,
                border: theme.colors.default.theme_color.border,
                primaryhov: theme.colors.default.theme_color.hover,
                primaryactive: theme.colors.default.theme_color.active,
                secondaryhov: theme.colors.default.theme_color.hover,
                secondaryactive: theme.colors.default.theme_color.theme_dark,
                active: theme.colors.default.text_color.btnactive,
                "theme-light": theme.colors.default.theme_color.theme_light,
                "theme-dark": theme.colors.default.theme_color.theme_dark,
                ...theme.colors.default.text_color,
                ...theme.colors.default.background,
                ...theme.colors.default.blanket,
                ...theme.colors.default.icons,
                ...theme.colors.default.others,
            },
            fontSize: {
                base: font_base + "px",
                h1: h1 + "rem",
                "h1-sm": h1 * 0.8 + "rem",
                h2: h2 + "rem",
                "h2-sm": h2 * 0.8 + "rem",
                h3: h3 + "rem",
                "h3-sm": h3 * 0.8 + "rem",
                h4: h4 + "rem",
                h5: h5 + "rem",
                h6: h6 + "rem",
            },
            fontFamily: {
                primary: [fontPrimary, fontPrimaryType],
                secondary: [fontSecondary, fontSecondaryType],
            },
            lineHeight: {
                prime: "2.28571em",
            },
            spacing: {
                "space.0": "0rem",
                "space.025": "0.125rem",
                "space.050": "0.25rem",
                "space.075": "0.375rem",
                "space.100": "0.5rem",
                "space.150": "0.75rem",
                "space.200": "1rem",
                "space.250": "1.25rem",
                "space.300": "1.5rem",
                "space.400": "2rem",
                "space.500": "2.5rem",
                "space.600": "3rem",
                "space.800": "4rem",
                "space.1000": "5rem",
            },
            boxShadow: {
                "light-box":
                    "var(--overlay, 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31))",
                "dark-box":
                    "var(--overlay, 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31))",
                flag: `0 20px 32px -8px ${theme.colors.default.theme_color.shadow2},0 0 1px ${theme.colors.default.theme_color.shadow2}`,
                modal: `0px 8px 12px ${theme.colors.default.theme_color.shadow1}, 0px 0px 1px ${theme.colors.default.theme_color.shadow2}`,
            },
            rotate: {
                310: "310deg",
            },
            transitionProperty: {
                bgColor: "background-color",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-bootstrap-grid")({
            generateContainer: false,
            gridGutterWidth: "2rem",
            gridGutters: {
                1: "0.25rem",
                2: "0.5rem",
                3: "1rem",
                4: "1.5rem",
                5: "3rem",
            },
        }),
    ],
};
