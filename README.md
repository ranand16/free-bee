# Free Bee

free-bee

## Demo link:

Access our site at [free-bee-design-systems.netlify.app](https://free-bee-design-systems.netlify.app/)

## Table of Content:

-   [About The App](#about-the-app)
-   [Screenshots](#screenshots)
-   [Technologies](#technologies)
-   [Setup](#setup)
-   [Approach](#approach)
-   [Tailwind configuration](#tailconf)
-   [Status](#status)
-   [Credits](#credits)
-   [License](#license)

## About The App

free-bee is a react + storybook + typescript + rollup app which is being built around to experiment with design systems. We don;t have a precise plan yet but soon we will have one.

## Screenshots

Uploading...

## Technologies/Plugins

We've used `React`, `Typescript`, `Storybook`, `Rollup`, `Tailwind`, `clsx`, `class variance autority(cva)` and other stuff mentioned in `package.json`. Feel free to checkout.

## Why are we using these technologies/plugins?

Loading...

## Setup

-   download or clone the repository
-   Go to `main` branch
-   run `npm install` or `npm i`
-   check `scripts` in `package.json` to run a command to run the app, run storybook, build the app etc.

# Setup a new design system

-   download the repository
-   Go to `boilerplate/v1` branch
-   add `git remote` to this downloaded code
-   push your first commit

## Approach

We've kept it very simple and will be following Atlassian's design system and develop some of their components.

-   Add Atlassian's coloring system in tailwind here.
-   Add Atlassian's typography system in tailwind here.
-   Add Popup, Button, Flags like components here.
-   Keep adding components until we have a minimal design system ready to implement atleast one of Atlassian's product like JIRA or Confluence.
-   Peiodically rollout npm package for same to be used externally.

## Tailwind Configuration

At `src/utility/theme.json` we have theme configurations, and we make use of this file in tailwind config to set most of the theming values. We will discuss about each here.
NOTE: We will be mentioning only those values which are being used in this project. In future we will be covering those config as well once we start using them.

1.  Background color: `background` property in theme.json has different kinds of colors which is used to determine background color of different components like button, labels, progress etc.
    Checkout `src/components/Button` folder for a good intuitive usage of same.
    NOTE: There are some un-used values which starts after a space.

2.  Theme color: `theme_color` is used at multiple places.
3.  Text color: `text_color` is also being used in the same way background is being used.
4.  Spacing tokens have been added which can be found in `tailwind.config.js` which can be used as a shorthands in various components.

## Status

| Components      | Status      |
| --------------- | ----------- |
| Button          | Completed   |
| Flags           | Completed   |
| Multiple select | Completed   |
| Lozenges        | Completed   |
| Modal           | Completed   |
| Avatars         | Completed   |
| Loader          | In Progress |
| Tooltip         | In Progress |
| PopUp           | In Progress |
| Input Field     | Completed   |
| Tags            | Completed   |
| Banner          | Completed   |
| Text Field      | Completed   |

<!-- ## What are we learning while building this styleguide/design system

Obviously once you read the approach and other things mentioned above you will get to know what someone would learn in course of building a design system. Let's try to understand: -->

## Credits

List of contriubutors:

-   [Rishabh Anand](https://github.com/ranand16)
-   [Sujit Samal](https://github.com/sujitsamaltechworks)

## License

MIT license

# Thanks to all below

1.  [Creating a React component library using Storybook](https://prateeksurana.me/blog/react-component-library-using-storybook-7/)
2.  [Writing an awesome Readme📄 for your side projects](https://victorbruce82.medium.com/writing-an-awesome-readme-for-your-side-projects-fabd20f96db0)
