import { useState } from "react";
import { motion } from "framer-motion";

export default function TodoItem({ todo, setTodos }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function toggle() {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function save() {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id ? { ...t, text } : t
      )
    );
    setEditing(false);
  }

  function remove() {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  }

  const overdue =
    !todo.completed && new Date(todo.date) < new Date();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className={`todo-item ${todo.priority} ${todo.completed ? "done" : ""}`}
    >
      <motion.input
        type="checkbox"
        checked={todo.completed}
        onChange={toggle}
        whileTap={{ scale: 1.3 }}
      />

      {editing ? (
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={save}
          autoFocus
        />
      ) : (
        <span className="text">{todo.text}</span>
      )}

      <span className={`date ${overdue ? "overdue" : ""}`}>
        {new Date(todo.date).toDateString()}
      </span>

      <motion.button whileHover={{ scale: 1.2 }} onClick={() => setEditing(true)}>
        ✏️
      </motion.button>

      <motion.button whileHover={{ scale: 1.2 }} onClick={remove}>
        🗑️
      </motion.button>
    </motion.div>
  );
}
