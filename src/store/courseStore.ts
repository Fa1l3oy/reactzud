import { create } from "zustand";

export type Course = {
  id: string;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: number; // สมมติเป็น 0-4
};

type CourseState = {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  calculateGPA: () => number;
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),

  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, course],
      };
    }),

  calculateGPA: () => {
    const { courses } = get();
    if (courses.length === 0) return 0;

    const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = courses.reduce(
      (sum, c) => sum + c.credit * c.grade,
      0
    );

    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
