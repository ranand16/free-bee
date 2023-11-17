import React, { forwardRef } from "react";

export interface BreadcrumbItemProps {
    href: string;
    text: string;
}

const BreadcrumbItem = forwardRef<HTMLInputElement, BreadcrumbItemProps>(
    ({ href, text, ...props }, ref) => {
        return (
            <li className="breadcrumb-item list-none after:content-['/'] after:p-space.100 text-subtlest last:after:hidden">
                <a href={href} className="hover:underline">
                    <span>{text}</span>
                </a>
            </li>
        );
    }
);

export default BreadcrumbItem;
