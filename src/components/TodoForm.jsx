import { useState } from "react";
import { getLocalDateKey } from "../utils/dates";

export default function TodoForm({ setTodos }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  function addTodo(event) {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText || !date) {
      setError("Enter a task name and choose a due date.");
      return;
    }

    setTodos(previous => [...previous, {
      id: crypto.randomUUID(),
      text: trimmedText,
      date,
      priority,
      completed: false,
    }]);
    setText("");
    setDate("");
    setPriority("medium");
    setError("");
  }

  return (
    <form className="todo-form" onSubmit={addTodo} noValidate>
      <div className="field field-task">
        <label htmlFor="task-name">Task name</label>
        <input
          id="task-name"
          placeholder="What needs to be done?"
          value={text}
          onChange={event => { setText(event.target.value); setError(""); }}
        />
      </div>
      <div className="field">
        <label htmlFor="due-date">Due date</label>
        <input
          id="due-date"
          type="date"
          min={getLocalDateKey()}
          value={date}
          onChange={event => { setDate(event.target.value); setError(""); }}
        />
      </div>
      <div className="field">
        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={event => setPriority(event.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button className="add-button" type="submit">Add task</button>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
