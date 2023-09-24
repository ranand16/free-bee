import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utility/functions";

// https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg
// https://aui.atlassian.com/aui/latest/docs/images/avatar-project.svg

const avatarVariants = cva("", {
    variants: {
        size: {
            xs: "w-4",
            sm: "w-6",
            md: "w-8",
            lg: "w-12",
            xl: "w-16",
            xxl: "w-24",
            xxxl: "w-32",
        },
        rounded: {
            xs: "rounded",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            xxl: "rounded-2xl",
            xxxl: "rounded-3xl",
            full: "rounded-full",
        },
    },
});

const statusVariants = cva("absolute", {
    variants: {
        size: {
            xs: "w-[4px]",
            sm: "w-[6px]",
            md: "w-[8px]",
            lg: "w-[12px]",
            xl: "w-[16px]",
            xxl: "w-[24px]",
            xxxl: "w-[32px]",
        },
        position: {
            topLeft: "top-0 left-0",
            topRight: "top-0 right-0",
            bottomLeft: "bottom-0 left-0",
            bottomRight: "bottom-0 right-0",
        },
    },
});

interface AvatarProps
    extends React.ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof avatarVariants> {
    statusSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
    statusColor?: string;
    statusPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const Avatar = ({
    src,
    width,
    height,
    alt,
    size,
    rounded,
    statusColor,
    statusSize,
    statusPosition = "topRight",
    ...props
}: AvatarProps) => {
    return (
        <div className="relative">
            <img
                src={src}
                width={width}
                height={height}
                alt={alt}
                className={cn(avatarVariants({ size, rounded }))}
                {...props}
            />
            {statusColor && (
                <svg
                    className={cn(
                        statusVariants({
                            position: statusPosition,
                            size: statusSize,
                        })
                    )}
                    version="1.1"
                    viewBox="0 0 8 8"
                    fill={statusColor}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx={statusSize}
                        cy={statusSize}
                        r={statusSize}
                    ></circle>
                </svg>
            )}
        </div>
    );
};

export default Avatar;
