import * as React from "react";

type ButtonProps = { label: string; theme: string };
function TextButton({ label, theme }: ButtonProps) {
    return (
        <>
            <button
                data-bs-theme={theme}
                className="bg-primary active:bg-primaryactive hover:bg-primaryhov active:border-transparent text-active font-bold rounded-[3.1px] px-2.5 py-1 data-[bs-theme=dark]:bg-secondary data-[bs-theme=dark]:active:bg-secondaryctive data-[bs-theme=dark]:hover:bg-secondaryhov"
            >
                {label}
            </button>
        </>
    );
}
export default TextButton;
