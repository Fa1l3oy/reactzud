import { useState } from "react";
import { useCourseStore } from "../store/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({ id: Date.now().toString(), ...form, credit: Number(form.credit), grade: Number(form.grade) });
    setForm({ code: "", nameTH: "", nameEN: "", credit: 0, teacher: "", grade: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2">
      <input placeholder="รหัสวิชา" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
      <input placeholder="ชื่อวิชา (TH)" value={form.nameTH} onChange={(e) => setForm({ ...form, nameTH: e.target.value })} />
      <input placeholder="ชื่อวิชา (EN)" value={form.nameEN} onChange={(e) => setForm({ ...form, nameEN: e.target.value })} />
      <input type="number" placeholder="หน่วยกิต" value={form.credit} onChange={(e) => setForm({ ...form, credit: +e.target.value })} />
      <input placeholder="อาจารย์" value={form.teacher} onChange={(e) => setForm({ ...form, teacher: e.target.value })} />
      <input type="number" step="0.1" placeholder="เกรด (0-4)" value={form.grade} onChange={(e) => setForm({ ...form, grade: +e.target.value })} />
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
}
