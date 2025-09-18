import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "space-y-1",
        align === "center" && "text-center",
        className
      )}
    >
      <h1
        className={cn(
          "text-[28px] leading-8 md:text-[32px] md:leading-9 font-semibold tracking-tight"
        )}
      >
        {title}
      </h1>
      {subtitle ? (
        <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>
      ) : null}
    </header>
  );
}
