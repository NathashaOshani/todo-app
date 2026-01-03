export default function Tabs({ filter, setFilter }) {
    return (
    <div className="tabs">
    {['today', 'pending', 'overdue'].map(tab => (
    <button
    key={tab}
    className={filter === tab ? 'active' : ''}
    onClick={() => setFilter(tab)}
    >
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
    ))}
    </div>
    );
    }