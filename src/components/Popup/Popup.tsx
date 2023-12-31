import React, { useState } from "react";
import Button from "../Button/Button";

export default function Popup() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                className="popup mb-space.100 cursor-pointer inline-block"
                onClick={() => setShow(!show)}
            >
                <Button
                    variant={"primary"}
                    label={!show ? "Open Popup!" : "Close Popup!"}
                />
            </div>
            <div>
                {show ? (
                    <span
                        className="popuptext p-space.200 text-center rounded-md fixed z-10 shadow-light-box dark:bg-input-hovered dark:text-btnactive"
                        id="myPopup"
                    >
                        A Simple Popup!
                    </span>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
