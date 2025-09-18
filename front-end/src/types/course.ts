export type CourseLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export type Course = {
  title: string;
  description: string;
  level?: CourseLevel;
};
