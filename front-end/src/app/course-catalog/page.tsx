"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import type { Course, CourseLevel } from "@/types/course";

const COURSES: Course[] = [
  {
    title: "Introduction to React",
    description:
      "Learn the fundamentals of React, from components and props to building your first app.",
    level: "BEGINNER",
  },
  {
    title: "TypeScript Essentials",
    description:
      "Strong typing in modern JS projects. Understand interfaces, generics, and tooling.",
    level: "BEGINNER",
  },
  {
    title: "Next.js Fundamentals",
    description:
      "Build full-stack apps with routing, API routes, and server-side rendering in Next.js.",
    level: "BEGINNER",
  },
  {
    title: "Advanced React",
    description:
      "Hooks, context, memoization, and performance patterns for scalable UIs.",
    level: "ADVANCED",
  },
  {
    title: "Frontend Testing",
    description:
      "Write unit and integration tests with Jest, React Testing Library, and Playwright.",
    level: "INTERMEDIATE",
  },
  {
    title: "JavaScript Deep Dive",
    description:
      "Explore the intricacies of JavaScript, including closures, prototypes, and async programming.",
    level: "INTERMEDIATE",
  },
  {
    title: "Advanced TypeScript",
    description:
      "Level up with generics, decorators, and advanced typing techniques for scalable apps.",
    level: "ADVANCED",
  },
];

export default function CourseCatalogPage() {
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<CourseLevel | "ALL">("ALL");
  const LEVELS: ReadonlyArray<CourseLevel | "ALL"> = [
    "ALL",
    "BEGINNER",
    "INTERMEDIATE",
    "ADVANCED",
  ] as const;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = COURSES;
    if (levelFilter !== "ALL") {
      list = list.filter((c) => (c.level ?? "BEGINNER") === levelFilter);
    }
    if (!q) return list;
    return list.filter((c) =>
      [c.title, c.description, c.level].some((v) =>
        String(v ?? "")
          .toLowerCase()
          .includes(q)
      )
    );
  }, [query, levelFilter]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="py-8 md:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Course Catalog"
            subtitle="Learn by doing. Browse our curated learning paths for developers."
          />
          <div className="w-full sm:w-[360px]">
            <Input
              placeholder="Search courses, topics, or level..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10"
              aria-label="Search courses"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {LEVELS.map((lvl) => (
            <Button
              key={lvl}
              variant={levelFilter === lvl ? "default" : "outline"}
              size="sm"
              onClick={() => setLevelFilter(lvl)}
              aria-pressed={levelFilter === lvl}
            >
              {lvl}
            </Button>
          ))}
          {levelFilter !== "ALL" || query ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setLevelFilter("ALL");
                setQuery("");
              }}
            >
              Clear
            </Button>
          ) : null}
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <CourseCard
              key={c.title}
              title={c.title}
              description={c.description}
              level={c.level}
            />
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground col-span-full">
              No courses match your search.
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}
