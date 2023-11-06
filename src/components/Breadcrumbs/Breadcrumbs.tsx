import * as React from "react";
import { forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const BreadcrumbsVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BreadcrumbsVariants> {
  children: any;
  maxItems?: number;
}

const Breadcrumbs = forwardRef<HTMLInputElement, BreadcrumbsProps>(
  ({ children, maxItems, ...props }, ref) => {
    console.log(children.length);
    const [showAll, setShowAll] = useState(false);
    const total = children.length;
    return (
      <>
        {maxItems && children.length > maxItems && !showAll ? (
          <div className="flex">
            <div className="mx-spacing-100">{children[0]}</div>
            <span
              className={`text-subtlest list-none after:content-['/'] after:p-space.100 before:content-['/'] before:p-space.100 ${
                showAll ? "hidden" : ""
              }`}
              onClick={() => setShowAll(!showAll)}
            >
              <span className="cursor-pointer hover:underline">...</span>
            </span>
            <div className="">{children[total - 1]}</div>
          </div>
        ) : (
          <div className="flex">{children}</div>
        )}
      </>
    );
  }
);

export default Breadcrumbs;
