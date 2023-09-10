import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utility/functions";

const tooltipVariants = cva(
    "tooltip absolute delay-200 opacity-0 before:h-[1px] before:w-[1px] before:m-[-1px] before:p-0 z-1 pointer-events-none select-none",
    {
        variants: {
            tipPosition: {
                top: "data-[tip-position='top']:translate-x-2/4",
                right: "data-[tip-position='right']:translate-x-2/4",
                bottom: "data-[tip-position='bottom']:translate-x-2/4",
                left: "data-[tip-position='left']:translate-x-2/4",
                blockStart: "data-[tip-position='block-start']:translate-x-2/4",
                blockEnd: "data-[tip-position='block-end']:translate-x-2/4",
            },
        },
    }
);

// tipPosition can be "top" "right" "bottom" "left" "block-start" "block-end"

interface TooltipProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof tooltipVariants> {
    peerClass: string;
    content: string;
}
const Tooltip = ({ peerClass, content, tipPosition }: TooltipProps) => {
    return (
        <div
            className={cn(
                `peer-hover:peer-[.${peerClass}]:opacity-100 peer-active:peer-[.${peerClass}]:opacity-100 peer-focus:peer-[.${peerClass}]:opacity-100 before:content-['; ${content}: '] `,
                tooltipVariants({ tipPosition })
            )}
            // className={`peer-hover:peer-[.${peerClass}]:opacity-100 peer-active:peer-[.${peerClass}]:opacity-100 peer-focus:peer-[.${peerClass}]:opacity-100 before:content-['; ${content}: '] tooltip absolute opacity-0 before:h-[1px] before:w-[1px] before:m-[-1px] before:p-0 z-1 pointer-events-none select-none`}
            // className={`peer-hover:peer-[.pert]:opacity-100 peer-active:peer-[.pert]:opacity-100 peer-focus:peer-[.pert]:opacity-100 before:content-['; ${content}: '] tooltip absolute opacity-0 before:h-[1px] before:w-[1px] before:m-[-1px] before:p-0 z-1 pointer-events-none select-none`}
            role="tooltip"
            data-tip-position={tipPosition}
        >
            {content}
        </div>
    );
};
export default Tooltip;
