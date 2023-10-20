import { FC, useState, useEffect, forwardRef } from "react";

interface ExpanderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Expander = forwardRef<HTMLDivElement, ExpanderProps>(
    ({ children }, ref) => {
        const [showMoreToggle, setShowMoreToggle] = useState(false);
        useEffect(() => {
            console.log(ref);
            console.log(ref?.current.firstChild);
            if (showMoreToggle && ref?.current.firstChild) {
                ref?.current.firstChild.classList.remove("h-0");
                ref?.current.firstChild.classList.add("h-auto");
            } else {
                ref?.current.firstChild.classList.add("h-0");
                ref?.current.firstChild.classList.remove("h-auto");
            }
        }, [showMoreToggle]);

        return (
            <div className="flex" ref={ref}>
                <div className="h-0 min-h-[1.5rem] relative overflow-hidden overflow-ellipsis ">
                    {children}
                </div>
                <a
                    className="pointer "
                    onClick={(e) => {
                        setShowMoreToggle((prev) => !prev);
                    }}
                >
                    {showMoreToggle ? "Show less" : "Show more"}
                </a>
            </div>
        );
    }
);

export default Expander;
