import React, { forwardRef } from "react";

export interface BreadcrumbsItemProps {
  href: string;
  text: string;
}

const BreadcrumbsItem = forwardRef<HTMLInputElement, BreadcrumbsItemProps>(
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

export default BreadcrumbsItem;
