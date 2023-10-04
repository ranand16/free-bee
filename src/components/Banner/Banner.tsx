import * as React from "react";
import { InputHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";

const BannerTypes = cva("flex items-center max-h-12 p-3 overflow-hidden gap-1 w-full", {
  variants: {
    variant: {
      warning: "bg-warning-bold text-default",
      error: "bg-danger-bold text-btnactive",
      announcement: "bg-subtle text-btnactive",
      success: "bg-success-bold text-btnactive",
    },
  },
  defaultVariants: {
    variant: "warning",
  },
});

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof BannerTypes> {
  children: any;
  href?: string;
  icon? : any;
}

const Banner = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ icon, children, className, variant, ...props }, ref) => {
    return (
      <div className={cn(BannerTypes({ variant, className }))} ref={ref}>
        <div className="icon flex">{icon}</div>
        <div className="overflow-x-clip text-ellipsis font-medium whitespace-nowrap">{children}</div>
      </div>
    );
  }
);

export default Banner;
