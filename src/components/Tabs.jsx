export default function Tabs({ filter, setFilter }) {
  return (
    <nav className="tabs" aria-label="Task filters">
      {["today", "pending", "overdue"].map(tab => (
        <button
          type="button" key={tab} className={filter === tab ? "active" : ""}
          aria-pressed={filter === tab} onClick={() => setFilter(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}
