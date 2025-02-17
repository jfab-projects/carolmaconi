import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost-black" | "ghost-white";
  icon?: ReactNode;
};

export const ButtonLink = ({
  children,
  variant,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      {...props}
      className={cn(
        "bg-primary text-white font-medium text-lg px-6 py-2 flex items-center gap-2 hover:bg-primary/90 transition",
        className,
        variant === "ghost-black" &&
          "bg-transparent border border-foreground text-black hover:bg-primary hover:text-white",
        variant === "ghost-white" &&
          "bg-transparent border border-white text-white hover:bg-primary hover:border-primary"
      )}
    >
      {children}
      {props.icon && props.icon}
    </Link>
  );
};
