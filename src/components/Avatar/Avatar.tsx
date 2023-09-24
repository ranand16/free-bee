import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utility/functions";

// https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg
// https://aui.atlassian.com/aui/latest/docs/images/avatar-project.svg

const avatarVariants = cva("border-2 border-white", {
    variants: {
        size: {
            xs: "w-4 h-4",
            sm: "w-6 h-6",
            md: "w-8 h-8",
            lg: "w-12 h-12",
            xl: "w-16 h-16",
            xxl: "w-24 h-24",
            xxxl: "w-32 h-32",
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
            xs: "w-[4px] h-[4px]",
            sm: "w-[6px] h-[6px]",
            md: "w-[8px] h-[8px]",
            lg: "w-[12px] h-[12px]",
            xl: "w-[16px] h-[16px]",
            xxl: "w-[24px] h-[24px]",
            xxxl: "w-[32px] h-[32px]",
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
    status?: boolean;
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
    status,
    statusColor = "#36B37E",
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
            {status && (
                <div
                    style={{ background: statusColor }}
                    className={cn(
                        `h-auto rounded-full border-2 border-white`,
                        statusVariants({
                            position: statusPosition,
                            size: statusSize || size,
                        })
                    )}
                ></div>
            )}
        </div>
    );
};

export default Avatar;
