import * as React from "react";
import Button from "@mui/material/Button";

type ButtonProps = { label: string };
function TextButton({ label }: ButtonProps) {
    return (
        <>
            <Button variant="contained">{label}</Button>{" "}
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {label}
            </button>{" "} */}
        </>
    );
}
export default TextButton;
