import { useTodoStore } from "../store/todoStore";

export default function TodoItem({ id, text }: { id: string; text: string }) {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li className="flex justify-between items-center border-b p-2">
      <span>{text}</span>
      <button
        onClick={() => removeTodo(id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        ลบ
      </button>
    </li>
  );
}
