import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("today");

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch {
      // Keep the app usable when browser storage is unavailable.
    }
  }, [todos]);

  return (
    <main className="app">
      <Header />
      <Tabs filter={filter} setFilter={setFilter} />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </main>
  );
}
