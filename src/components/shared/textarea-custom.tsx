import React from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Textarea, TextareaProps } from "../ui/textarea";

type TextAreaProps = TextareaProps & {
  label: string;
  error?: string;
  containerClassName?: string;
};

export const TextAreaCustom = ({
  label,
  error,
  containerClassName,
  ...props
}: TextAreaProps) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <Label htmlFor={props.name} className="block mb-2 text-md">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      <Textarea
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
