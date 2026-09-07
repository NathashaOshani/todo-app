import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import TodoItem from "./TodoItem";
import { getLocalDateKey } from "../utils/dates";

export default function TodoList({ todos, setTodos, filter }) {
  const [showCompleted, setShowCompleted] = useState(true);
  const today = getLocalDateKey();
  const filteredTodos = todos.filter(todo => {
    if (filter === "today") return todo.date === today;
    if (filter === "overdue") return !todo.completed && todo.date < today;
    return !todo.completed && todo.date >= today;
  });
  const active = filteredTodos.filter(todo => !todo.completed);
  const completed = filteredTodos.filter(todo => todo.completed);

  if (filteredTodos.length === 0) {
    return (
      <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} className="empty" role="status">
        {todos.length === 0 ? "No tasks yet. Add one to get started." : `No ${filter} tasks.`}
      </Motion.div>
    );
  }

  return (
    <section className="todo-list" aria-label={`${filter} tasks`}>
      <ul className="task-group">
        <AnimatePresence>
          {active.map(todo => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)}
        </AnimatePresence>
      </ul>
      {completed.length > 0 && (
        <Motion.button
          type="button" className="toggle" whileHover={{ scale: 1.03 }}
          onClick={() => setShowCompleted(current => !current)}
          aria-expanded={showCompleted} aria-controls="completed-tasks"
        >
          Completed ({completed.length}) · {showCompleted ? "Hide" : "Show"}
        </Motion.button>
      )}
      <ul className="task-group" id="completed-tasks">
        <AnimatePresence>
          {showCompleted && completed.map(todo => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)}
        </AnimatePresence>
      </ul>
    </section>
  );
}
