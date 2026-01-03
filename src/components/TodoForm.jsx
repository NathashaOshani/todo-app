import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("medium");

  function addTodo() {
    if (!text || !date) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text,
        date,
        priority,
        completed: false
      }
    ]);

    setText("");
    setDate("");
    setPriority("medium");
  }

  return (
    <div className="todo-form">
      <input
        placeholder="Task name"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
