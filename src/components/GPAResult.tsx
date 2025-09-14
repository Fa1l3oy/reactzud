import { useCourseStore } from "../store/courseStore";

export default function GPAResult() {
  const gpa = useCourseStore((state) => state.calculateGPA());

  return (
    <div>
      <h2>GPA รวม: {gpa.toFixed(2)}</h2>
    </div>
  );
}
