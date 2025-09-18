import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  width?: "lg" | "xl";
};

export default function Container({
  className,
  width = "lg",
  ...props
}: ContainerProps) {
  const maxWidth = width === "xl" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div
      className={cn(
        "mx-auto w-full",
        maxWidth,
        "px-6 md:px-8 lg:px-10",
        className
      )}
      {...props}
    />
  );
}
