import * as React from "react";

type ButtonProps = { label: string };
function TextButton({ label }: ButtonProps) {
    return (
        <>
            <button
                // className="bg-primary active:bg-primaryactive hover:bg-primaryhov active:border-transparent text-active font-bold rounded-[3.1px] px-2.5 py-1 data-[bs-theme=dark]:bg-secondary data-[bs-theme=dark]:active:bg-secondaryctive data-[bs-theme=dark]:hover:bg-secondaryhov"
                className="bg-primary active:bg-primaryactive hover:bg-primaryhov active:border-transparent text-active font-bold rounded-[3.1px] px-2.5 py-1 dark:bg-secondary dark:active:bg-secondaryctive dark:hover:bg-secondaryhov"
            >
                {label}
            </button>
        </>
    );
}
export default TextButton;
