"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Course } from "@/types/course";

const levelColor: Record<NonNullable<Course["level"]>, string> = {
  BEGINNER: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  INTERMEDIATE: "bg-amber-500/20 text-amber-200 border-amber-500/30",
  ADVANCED: "bg-rose-500/20 text-rose-200 border-rose-500/30",
};

export default function CourseCard({
  title,
  description,
  level = "BEGINNER",
}: Course) {
  return (
    <article aria-label={title} className="h-full">
      <Card className="h-full bg-card/100 border border-border rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-[20px] leading-7 font-semibold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-[14px] leading-[22px] text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto px-0 pb-0 pt-2 flex flex-col gap-4">
          <Badge
            className={
              levelColor[level] +
              " uppercase font-medium text-[12px] leading-[18px]"
            }
          >
            {level}
          </Badge>
          <Button className="w-fit text-[14px] leading-5 font-medium px-4 py-2 h-auto rounded-md">
            Start Learning
          </Button>
        </CardContent>
      </Card>
    </article>
  );
}
