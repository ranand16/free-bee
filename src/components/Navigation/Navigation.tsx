import * as React from "react";
import { FC } from "react";

const SvgComponent1 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 8.947 8.947 0 0 0-.836-1.993.477.477 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.988 1.988 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.478.478 0 0 0-.196-.597 8.98 8.98 0 0 0-1.975-.826.479.479 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.994 1.994 0 0 1-1.884-1.345.482.482 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.478.478 0 0 0-.595.196 8.946 8.946 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 0 0-.308.57 8.99 8.99 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 8.946 8.946 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 8.964 8.964 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 8.925 8.925 0 0 0 .728-1.793.478.478 0 0 0-.314-.573"
        />
    </svg>
);

const SvgComponent2 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent3 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 11V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4z"
        />
    </svg>
);
const SvgComponent4 = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={32}
        aria-hidden="true"
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            fill="#2684FF"
            d="M15.967 29.362a6.675 6.675 0 0 0 0-9.442l-8.699-8.671-3.957 3.957a1.062 1.062 0 0 0 0 1.5l12.656 12.656zm12.656-14.156L15.967 2.55l-.039.039a6.675 6.675 0 0 0 .028 9.41l8.706 8.667 3.96-3.96a1.062 1.062 0 0 0 0-1.5z"
        />
        <path
            fill="url(#uid17-1"
            d="M15.967 11.992a6.675 6.675 0 0 1-.028-9.41L6.91 11.606l4.72 4.721 4.336-4.335Z"
        />
        <path
            fill="url(#uid17-2"
            d="m20.295 15.591-4.328 4.329a6.675 6.675 0 0 1 0 9.442l9.05-9.05-4.722-4.72Z"
        />
    </svg>
);

const SvgComponent5 = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={32}
        aria-hidden="true"
        viewBox="0 0 179 32"
        {...props}
    >
        <defs>
            <linearGradient
                id="a"
                x1="97.655%"
                x2="37.202%"
                y1="35.659%"
                y2="75.489%"
            >
                <stop offset="7%" stopColor="#0052CC" />
                <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
            <linearGradient
                id="b"
                x1="8.434%"
                x2="64.116%"
                y1="60.15%"
                y2="23.579%"
            >
                <stop offset="0%" stopColor="#0052CC" />
                <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
        </defs>
        <path
            fill="#2684FF"
            d="M11.388 27.924a6.004 6.004 0 0 0 1.718-4.212c0-1.58-.618-3.096-1.718-4.213l-7.64-7.737-3.474 3.53a.958.958 0 0 0 0 1.34l11.114 11.292ZM22.503 15.293 11.388 4l-.034.035c-2.265 2.33-2.254 6.08.025 8.397l7.646 7.733 3.478-3.533a.958.958 0 0 0 0-1.34Z"
        />
        <path
            fill="url(#a)"
            d="M11.388 12.425c-2.279-2.316-2.29-6.067-.025-8.397l-7.929 8.053 4.147 4.213 3.807-3.869Z"
        />
        <path
            fill="url(#b)"
            d="m15.19 15.637-3.802 3.862a6.004 6.004 0 0 1 1.718 4.213c0 1.58-.618 3.095-1.718 4.212l7.948-8.075-4.147-4.212Z"
        />
        <path
            fill="var(--ds-text, #253858)"
            fillRule="evenodd"
            d="M36.07 18.956c0 1.69-.676 2.886-2.652 2.886-.858 0-1.716-.156-2.418-.442v2.262c.65.234 1.586.442 2.808.442 3.224 0 4.602-2.158 4.602-5.304V6.918h-2.34v12.038Zm5.824-11.388c0 .988.65 1.56 1.56 1.56s1.56-.572 1.56-1.56c0-.988-.65-1.56-1.56-1.56s-1.56.572-1.56 1.56ZM42.31 24h2.236V11H42.31v13Zm5.616 0h2.184v-7.67c0-2.756 1.742-3.614 4.602-3.328v-2.184c-2.548-.156-3.848.936-4.602 2.47V11h-2.184v13Zm17.524 0v-2.34c-.832 1.716-2.392 2.6-4.394 2.6-3.458 0-5.2-2.938-5.2-6.76 0-3.666 1.82-6.76 5.46-6.76 1.898 0 3.354.858 4.134 2.548V11h2.236v13H65.45Zm-7.358-6.5c0 3.12 1.248 4.68 3.562 4.68 2.002 0 3.796-1.274 3.796-4.16v-1.04c0-2.886-1.638-4.16-3.536-4.16-2.522 0-3.822 1.664-3.822 4.68Zm28.834 1.794c0-3.068-2.028-4.238-5.642-5.148-3.016-.754-4.108-1.456-4.108-2.86 0-1.56 1.326-2.34 3.562-2.34 1.768 0 3.614.312 5.33 1.3v-2.34c-1.17-.65-2.756-1.248-5.226-1.248-3.978 0-6.006 1.976-6.006 4.628 0 2.808 1.716 4.134 5.564 5.07 3.25.78 4.186 1.586 4.186 3.094 0 1.508-.962 2.522-3.536 2.522-2.262 0-4.706-.598-6.292-1.43v2.392c1.326.676 2.86 1.326 6.162 1.326 4.238 0 6.006-2.002 6.006-4.966Zm8.164 4.966c-3.9 0-6.188-2.886-6.188-6.786 0-3.9 2.288-6.734 6.188-6.734 3.874 0 6.136 2.834 6.136 6.734s-2.262 6.786-6.136 6.786Zm0-11.44c-2.782 0-4.004 2.184-4.004 4.654 0 2.47 1.222 4.706 4.004 4.706 2.756 0 3.952-2.236 3.952-4.706s-1.196-4.654-3.952-4.654Zm11.83-3.198c0-1.17.676-1.976 2.054-1.976.52 0 1.014.052 1.404.13V5.722a5.368 5.368 0 0 0-1.508-.208c-2.782 0-4.134 1.638-4.134 4.056V11h-2.106v2.08h2.106V24h2.184V13.08h3.354V11h-3.354V9.622Zm8.866 10.27V13.08h3.458V11h-3.458V8.244h-2.184V11h-2.106v2.08h2.106v6.864c0 2.418 1.352 4.056 4.134 4.056.676 0 1.118-.104 1.508-.208v-2.158c-.39.078-.884.182-1.404.182-1.378 0-2.054-.78-2.054-1.924ZM125.432 24h2.86l2.236-6.292 1.196-4.004 1.196 4.004L135.156 24h2.86l4.784-13h-2.47l-3.744 11.024L132.79 11h-2.132l-3.796 11.024L123.118 11h-2.47l4.784 13Zm28.106 0v-2.34c-.832 1.716-2.392 2.6-4.394 2.6-3.458 0-5.2-2.938-5.2-6.76 0-3.666 1.82-6.76 5.46-6.76 1.898 0 3.354.858 4.134 2.548V11h2.236v13h-2.236Zm-7.358-6.5c0 3.12 1.248 4.68 3.562 4.68 2.002 0 3.796-1.274 3.796-4.16v-1.04c0-2.886-1.638-4.16-3.536-4.16-2.522 0-3.822 1.664-3.822 4.68Zm12.974 6.5h2.184v-7.67c0-2.756 1.742-3.614 4.602-3.328v-2.184c-2.548-.156-3.848.936-4.602 2.47V11h-2.184v13Zm18.954-.52c-1.066.572-2.704.78-4.03.78-4.862 0-6.994-2.808-6.994-6.786 0-3.926 2.184-6.734 6.136-6.734 4.004 0 5.616 2.782 5.616 6.734v1.014h-9.49c.312 2.21 1.742 3.64 4.81 3.64 1.508 0 2.782-.286 3.952-.702v2.054Zm-4.992-10.712c-2.366 0-3.562 1.534-3.796 3.796h7.254c-.13-2.418-1.222-3.796-3.458-3.796Z"
        />
    </svg>
);

const SvgComponent6 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent7 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent8 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent9 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent10 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);

const SvgComponent11 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        />
    </svg>
);
const SvgComponent12 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"
        />
    </svg>
);

const SvgComponent13 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m16.436 15.085 3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        />
    </svg>
);

const SvgComponent14 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m16.436 15.085 3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        />
    </svg>
);

const SvgComponent15 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.485 17.669a2 2 0 0 0 2.829 0l-2.829-2.83a2 2 0 0 0 0 2.83zm4.897-12.191-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 0 0 .64-6.356 1.01 1.01 0 1 0-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 0 0-2.788-.84 5.036 5.036 0 0 0-3.57 1.478z"
        />
    </svg>
);

const SvgComponent16 = (props: any) => (
    <svg width={24} height={24} {...props}>
        <g fillRule="evenodd">
            <circle cx={12} cy={12} r={10} fill="currentColor" />
            <circle cx={12} cy={18} r={1} fill="inherit" />
            <path
                fill="inherit"
                d="M15.89 9.05a3.975 3.975 0 0 0-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 0 0 .982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 0 1 4.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 0 0-1 .987v2.014a1.001 1.001 0 0 0 2.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0 0 15.89 9.05"
            />
        </g>
    </svg>
);

export interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
    return (
        <header role="banner" className="bg-white text-subtlest-old2">
            <nav aria-label="Primary" className="css-vtikxo">
                <div>
                    <div role="presentation">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-busy="false"
                            className="css-1iyy2v3"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-bwxjrz">
                                <span
                                    role="img"
                                    aria-label="Appswitcher Icon"
                                    className="css-snhnyn"
                                >
                                    <SvgComponent12 />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <a href="/jira" className="css-me4kch">
                    <div className="css-gij9v3">
                        <span
                            aria-label="Jira Software"
                            role="img"
                            className="css-12mte9y"
                        >
                            <SvgComponent5 />
                        </span>
                    </div>
                    <div className="css-1yzgzqg">
                        <span
                            aria-label="Jira Software"
                            role="img"
                            className="css-12mte9y"
                        >
                            <SvgComponent4 />
                        </span>
                    </div>
                </a>
                <div className="css-njhh6c">
                    <div className="css-17unx0o">
                        <button
                            aria-expanded="true"
                            aria-haspopup="true"
                            aria-busy="false"
                            className="css-x0akgx"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-178ag6o">Your work</span>
                            <span className="css-bwxjrz">
                                .
                                <div className="css-n08lxq">
                                    <span
                                        aria-hidden="true"
                                        className="css-snhnyn"
                                    >
                                        <SvgComponent6 />
                                    </span>
                                </div>
                            </span>
                        </button>
                    </div>
                    <div className="_wvzr1osq">
                        <div className="css-10d50pf">
                            <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-busy="false"
                                className="css-798be7"
                                tabIndex={0}
                                type="button"
                            >
                                <span className="css-178ag6o">Projects</span>
                                <span className="css-bwxjrz">
                                    <div className="css-n08lxq">
                                        <span
                                            aria-hidden="true"
                                            className="css-snhnyn"
                                        >
                                            <SvgComponent7 />
                                        </span>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="css-17unx0o">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-busy="false"
                            className="css-798be7"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-178ag6o">Filters</span>
                            <span className="css-bwxjrz">
                                <div className="css-n08lxq">
                                    <span
                                        aria-hidden="true"
                                        className="css-snhnyn"
                                    >
                                        <SvgComponent8 />
                                    </span>
                                </div>
                            </span>
                        </button>
                    </div>
                    <div className="css-17unx0o">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-busy="false"
                            className="css-798be7"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-178ag6o">Dashboards</span>
                            <span className="css-bwxjrz">
                                <div className="css-n08lxq">
                                    <span
                                        aria-hidden="true"
                                        className="css-snhnyn"
                                    >
                                        <SvgComponent9 />
                                    </span>
                                </div>
                            </span>
                        </button>
                    </div>
                    <div className="_4t3i1osq _1e0c1txw _4cvr1h6o _19pnkb7n _13aikb7n _1gqrf1ug">
                        <div
                            data-testid="menu-people-wrapper"
                            className="_1e0c1txw _4t3i1osq _16jlkb7n _shj5kb7n"
                        >
                            <div className="css-17unx0o">
                                <button
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    aria-busy="false"
                                    className="css-798be7"
                                    data-testid="menu-people-primary-button"
                                    tabIndex={0}
                                    type="button"
                                >
                                    <span className="css-178ag6o">Teams</span>
                                    <span className="css-bwxjrz">
                                        <div className="css-n08lxq">
                                            <span
                                                aria-hidden="true"
                                                className="css-snhnyn"
                                            >
                                                <SvgComponent10 />
                                            </span>
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="_4t3i1474 _19pk338m _ca0q9s41 _1e0cu13u _2lx2dury _1bahdlq5 _bfhk1fzw">
                        <div
                            data-uid="plans-spotlight-target-wrapper"
                            className="_4t3i1474 _19pk338m _ca0q9s41 _1e0cu13u _2lx2dury _1bahdlq5 _bfhk1fzw"
                        >
                            <div className="_4t3i1osq _1e0c1txw _4cvr1h6o _19pnkb7n _13aikb7n _1gqrf1ug">
                                <div className="css-17unx0o">
                                    <button
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        aria-busy="false"
                                        className="css-798be7"
                                        tabIndex={0}
                                        type="button"
                                    >
                                        <span className="css-178ag6o">
                                            Plans
                                        </span>
                                        <span className="css-bwxjrz">
                                            <div className="css-n08lxq">
                                                <span
                                                    aria-hidden="true"
                                                    className="css-snhnyn"
                                                >
                                                    <SvgComponent11 />
                                                </span>
                                            </div>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_4t3i1osq _1e0c1txw _4cvr1h6o _19pnkb7n _13aikb7n _1gqrf1ug">
                        <div className="css-17unx0o">
                            <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-busy="false"
                                className="css-798be7"
                                tabIndex={0}
                                type="button"
                            >
                                <span className="css-178ag6o">Apps</span>
                                <span className="css-bwxjrz">
                                    <div className="css-n08lxq">
                                        <span
                                            aria-hidden="true"
                                            className="css-snhnyn"
                                        >
                                            <SvgComponent2 />
                                        </span>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        data-testid="create-button-wrapper"
                        className="css-hue21z"
                    >
                        <button
                            id="createGlobalItem"
                            data-hide-on-smallscreens="true"
                            aria-busy="false"
                            className="css-1oonzef"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-178ag6o">Create</span>
                        </button>
                        <button
                            id="createGlobalItemIconButton"
                            aria-label="Create"
                            data-hide-on-largescreens="true"
                            aria-busy="false"
                            className="css-17aeism"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-bwxjrz">
                                <span
                                    role="img"
                                    aria-label="Create"
                                    className="css-snhnyn"
                                >
                                    <SvgComponent3 />
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="css-1ozpmrm">
                        <div className="block w-full absolute"></div>
                    </div>
                </div>
            </nav>
            <div className="css-1kpbp8m">
                <div className="_1e0c1txw _1bah1h6o _4cvr1h6o _kqswh2mm">
                    <div className="_1xhqi2wt">
                        <div>
                            <div className="css-9wcsid">
                                <div className="css-0">
                                    <div className="css-79elbk">
                                        <div role="presentation">
                                            <div className="css-pddbfj">
                                                <span className="css-wsgzdc">
                                                    <button
                                                        aria-busy="false"
                                                        className="css-1p9mxd0"
                                                        tabIndex={0}
                                                        type="button"
                                                    >
                                                        <span className="css-bwxjrz">
                                                            <span
                                                                role="img"
                                                                aria-label="search"
                                                                className="css-1afrefi"
                                                            >
                                                                <SvgComponent13 />
                                                            </span>
                                                        </span>
                                                    </button>
                                                </span>
                                                <span
                                                    tabIndex={0}
                                                    className="css-lvi2ji"
                                                >
                                                    <span
                                                        role="img"
                                                        aria-label="search"
                                                        className="css-1wits42"
                                                    >
                                                        <SvgComponent14 />
                                                    </span>
                                                </span>
                                                <input
                                                    data-test-id="search-dialog-input"
                                                    placeholder="Search"
                                                    className="css-1hswbg8"
                                                    value=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            data-test-id="search-dialog-dialog-wrapper"
                                            tabIndex={-1}
                                            className="css-44vo0a"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="css-79elbk">
                        <div role="presentation">
                            <button
                                aria-describedby="atlassian-navigation-notification-count"
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-busy="false"
                                className="css-1iyy2v3"
                                tabIndex={0}
                                type="button"
                            >
                                <span className="css-bwxjrz">
                                    <span
                                        role="img"
                                        aria-label="Notifications"
                                        className="css-snhnyn"
                                    >
                                        <SvgComponent15 />
                                    </span>
                                </span>
                            </button>
                        </div>
                        <div
                            id="atlassian-navigation-notification-count"
                            aria-hidden="true"
                            className="css-1rkfc9x"
                        ></div>
                    </div>
                </div>
                <div>
                    <div data-test-id="ak-spotlight-target-help-spotlight">
                        <div className="css-79elbk">
                            <div role="presentation">
                                <button
                                    aria-expanded="false"
                                    aria-haspopup="false"
                                    aria-busy="false"
                                    className="css-1iyy2v3"
                                    tabIndex={0}
                                    type="button"
                                >
                                    <span className="css-bwxjrz">
                                        <span
                                            role="img"
                                            aria-label="Help"
                                            className="css-snhnyn"
                                        >
                                            <SvgComponent16 />
                                        </span>
                                    </span>
                                </button>
                            </div>
                            <div
                                id="atlassian-navigation-help-notification-count"
                                aria-hidden="true"
                                className="css-1rkfc9x"
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div role="presentation">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-busy="false"
                            className="css-1iyy2v3"
                            tabIndex={0}
                            type="button"
                        >
                            <span className="css-bwxjrz">
                                <span
                                    role="img"
                                    aria-label="Settings"
                                    className="css-snhnyn"
                                >
                                    <SvgComponent1 />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <span className="sc-bwzfXH huckDO">
                        <div className="yriyr-0 fnPRtL">
                            <div role="presentation">
                                <button
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    aria-label="Your profile and settings"
                                    aria-busy="false"
                                    className="css-1iyy2v3"
                                    tabIndex={0}
                                    type="button"
                                >
                                    <span className="css-bwxjrz">
                                        <span data-test-id="ak-spotlight-target-profile-spotlight">
                                            <div>
                                                <span className="css-vnrk9l">
                                                    <img
                                                        src="https://secure.gravatar.com/avatar/973c5f308cbf06bd4fa9e96f71ed1816?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FRA-5.png"
                                                        alt=""
                                                        className="css-13ep12v"
                                                    />
                                                </span>
                                            </div>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
