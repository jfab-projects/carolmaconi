import React from "react";
import { Label } from "../ui/label";
import { Input, InputProps } from "../ui/input";
import { cn } from "@/lib/utils";

type InputCustomProps = InputProps & {
  label: string;
  error?: string;
  containerClassName?: string;
};

export const InputCustom = ({
  label,
  error,
  containerClassName,
  ...props
}: InputCustomProps) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <Label htmlFor={props.name} className="block mb-2 text-md">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      <Input
        className={`${
          error
            ? "border-red-500 dark:border-red-500 dark:focus:border-red-500"
            : props.className
        }`}
        {...props}
      />

      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};
