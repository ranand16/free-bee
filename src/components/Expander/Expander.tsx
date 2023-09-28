import { FC, useState, useEffect, forwardRef } from "react";

interface ExpanderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Expander = forwardRef<HTMLDivElement, ExpanderProps>(
    ({ children }, ref) => {
        const [showMoreToggle, setShowMoreToggle] = useState(true);
        useEffect(() => {
            console.log(ref);
            console.log(ref?.firstChild);
            if (ref?.previousElementSibling) {
                ref?.previousElementSibling.classList.remove("h-0");
                ref?.previousElementSibling.classList.add("h-auto");
            }
        }, [showMoreToggle]);
        return (
            <div ref={ref}>
                <div className="h-0 min-h-[1.5rem] relative overflow-hidden">
                    {children}
                </div>
                <a
                    onClick={(e) => {
                        setShowMoreToggle((prev) => !prev);
                    }}
                >
                    {showMoreToggle ? "Show more" : "Show less"}
                </a>
            </div>
        );
    }
);

export default Expander;
