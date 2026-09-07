import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { formatDate, isOverdue } from "../utils/dates";

export default function TodoItem({ todo, setTodos }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  function toggle() {
    setTodos(previous => previous.map(item =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    ));
  }

  function save() {
    const trimmedText = text.trim();
    if (!trimmedText) {
      setText(todo.text);
      setEditing(false);
      return;
    }
    setTodos(previous => previous.map(item =>
      item.id === todo.id ? { ...item, text: trimmedText } : item
    ));
    setText(trimmedText);
    setEditing(false);
  }

  function handleEditKeyDown(event) {
    if (event.key === "Enter") save();
    if (event.key === "Escape") {
      setText(todo.text);
      setEditing(false);
    }
  }

  return (
    <Motion.li
      layout
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
      className={`todo-item ${todo.priority} ${todo.completed ? "done" : ""}`}
    >
      <Motion.input
        type="checkbox" checked={todo.completed}
        onChange={toggle} whileTap={{ scale: 1.3 }}
        aria-label={`Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`}
      />
      <div className="todo-content">
        {editing ? (
          <input
            className="edit-input" value={text}
            onChange={event => setText(event.target.value)} onBlur={save}
            onKeyDown={handleEditKeyDown} aria-label="Edit task name" autoFocus
          />
        ) : <span className="text">{todo.text}</span>}
        <span className={`date ${isOverdue(todo) ? "overdue" : ""}`}>
          Due {formatDate(todo.date)}
        </span>
      </div>
      <div className="todo-actions">
        <Motion.button type="button" whileHover={{ scale: 1.08 }} onClick={() => setEditing(true)} aria-label={`Edit ${todo.text}`}>
          Edit
        </Motion.button>
        <Motion.button
          className="delete-button" type="button" whileHover={{ scale: 1.08 }}
          onClick={() => setTodos(previous => previous.filter(item => item.id !== todo.id))}
          aria-label={`Delete ${todo.text}`}
        >
          Delete
        </Motion.button>
      </div>
    </Motion.li>
  );
}
