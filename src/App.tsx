import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import GPAResult from "./components/GPAResult";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-6">
      <h1>TodoList</h1>
      <TodoForm />
      <TodoList />
      <h1>ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <GPAResult />

    </div>
  );
}

export default App;
