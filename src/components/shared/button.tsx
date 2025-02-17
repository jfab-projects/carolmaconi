import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "ghost";
};

export const Button = ({
  children,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-primary text-white font-medium text-lg px-6 py-2 flex items-center gap-2 hover:bg-primary/90 transition",
        variant === "ghost" &&
          "bg-transparent border border-foreground text-foreground hover:bg-primary hover:text-white"
      )}
    >
      {children}
      {icon && icon}
    </button>
  );
};
