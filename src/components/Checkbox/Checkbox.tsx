"use client";
import { FC, HTMLAttributes } from "react";

interface CheckboxProps extends HTMLAttributes<HTMLElement> {
    labelText: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, labelText, ...props }) => {
    return (
        <label
            className="w-full flex items-center gap-2 cursor-pointer select-none"
            htmlFor={id}
        >
            <input
                className="peer relative appearance-none cursor-pointer border-none shrink-0 w-6 h-6 rounded-[4px] checked:bg-none checked:text-none checked:text-transparent checked:border-0"
                type="checkbox"
                id={id}
                {...props}
            />
            <svg
                viewBox="-279.8961 -92.8879 142.2172 106.4759"
                className="w-6 h-6 p-1 absolute pointer-events-none border-2 rounded-[4px] border-text-input-hovered bg-white stroke-white fill-none peer-hover:border-text-input-hovered peer-checked:border-2 peer-checked:border-none peer-checked:focus:border-accent-blue-subtle peer-checked:hover:bord peer-checked:focus:border-1 peer-checked:hover:text-text-input-hovered peer-checked:bg-accent-blue-subtle transition-all duration-200 ease-in-out"
            >
                <path
                    d="M -249.425 -52.126 C -258.912 -61.94 -275.452 -57.832 -279.209 -44.721 C -281.016 -38.426 -279.197 -31.642 -274.483 -27.09 L -239.04 8.384 C -232.128 15.314 -220.904 15.324 -213.981 8.406 L -143.095 -62.417 C -133.289 -71.883 -137.412 -88.428 -150.526 -92.196 C -156.823 -94.009 -163.604 -92.196 -168.153 -87.498 L -226.516 -29.186 L -249.425 -52.126 Z"
                    fill="#fff"
                    transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -2.842170943040401e-14)"
                ></path>
            </svg>
            <span>{labelText}</span>
        </label>
    );
};

export default Checkbox;
