import React from 'react';
import './TodoStats.css';

const TodoStats = ({ total, active, completed }) => {
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{active}</span>
        <span className="stat-label">Active</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Done</span>
      </div>
    </div>
  );
};

export default TodoStats;