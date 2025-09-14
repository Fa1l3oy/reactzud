import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
