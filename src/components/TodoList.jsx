import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

export default function TodoList({ todos, setTodos }) {
  const [showCompleted, setShowCompleted] = useState(true);

  const active = todos.filter(t => !t.completed);
  const completed = todos.filter(t => t.completed);

  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="empty"
      >
        ✨ No tasks yet. Add one to get started.
      </motion.div>
    );
  }

  return (
    <div className="todo-list">
      <AnimatePresence>
        {active.map(todo => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </AnimatePresence>

      <motion.div
        className="toggle"
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowCompleted(!showCompleted)}
      >
        Completed {showCompleted ? "▲" : "▼"}
      </motion.div>

      <AnimatePresence>
        {showCompleted &&
          completed.map(todo => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
      </AnimatePresence>
    </div>
  );
}
