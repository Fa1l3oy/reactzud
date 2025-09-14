import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        type="text"
        placeholder="เพิ่มงานใหม่..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        เพิ่ม
      </button>
    </form>
  );
}
