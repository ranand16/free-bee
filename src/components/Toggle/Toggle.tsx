import * as React from "react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utility/functions";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    disabled?: boolean;
}

const Button = forwardRef<HTMLLabelElement, ToggleProps>(
    ({ label, className, disabled, id, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(
                    "cursor-pointer box-content inline-block p-[2px] m-[2px] bg-neutral-bold rounded-2xl border-2 border-transparent h-4 relative w-8 text-inverse before:bg-inverse before:rounded-full before:contents-[''] before:absolute before:bottom-1 before:h-3 before:w-3 before:left-1",
                    className
                )}
                id={id}
            >
                <input
                    type="checkbox"
                    className="opacity-0 border-none m-0 p-0"
                />
                <span
                    aria-hidden="true"
                    className="text-surface-primary top-[2px] absolute left-[3px] inline-block w-4 h-4"
                    style={{}}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="presentation"
                        className="overflow-hidden pointer-events-none max-w-full max-h-full fill-surface-primary text-surface-primary align-bottom"
                    >
                        <path
                            d="M7.356 10.942a.497.497 0 00-.713 0l-.7.701a.501.501 0 00-.003.71l3.706 3.707a.501.501 0 00.705.003l7.712-7.712a.493.493 0 00-.006-.708l-.7-.7a.504.504 0 00-.714 0l-6.286 6.286a.506.506 0 01-.713 0l-2.288-2.287z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </span>
                <span
                    aria-hidden="true"
                    className="text-surface-primary top-[2px] absolute right-[3px] inline-block w-4 h-4"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="presentation"
                        className="overflow-hidden pointer-events-none max-w-full max-h-full fill-surface-primary text-surface-primary align-bottom"
                    >
                        <path
                            d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 00-.712.003l-.7.701a.496.496 0 00-.004.712l3.185 3.184L7.4 15.185a.507.507 0 00.004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 00.712-.004l.701-.7a.496.496 0 00.003-.712l-3.186-3.186 3.186-3.184a.507.507 0 00-.003-.712l-.7-.7a.508.508 0 00-.36-.153.5.5 0 00-.353.15z"
                            fill="currentColor"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </span>
            </label>
        );
    }
);
export default Button;
