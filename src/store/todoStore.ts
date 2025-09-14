import { create } from "zustand";

type Todo = {
  id: string;
  text: string;
};

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now().toString(), text }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
