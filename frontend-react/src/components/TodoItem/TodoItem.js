import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div
        className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={onToggle}
        role="checkbox"
        aria-checked={todo.completed}
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle();
          }
        }}
      >
        {todo.completed && <span className="checkmark">✓</span>}
      </div>
      <div className="todo-content">
        <div className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </div>
        <div className="todo-date">
          {todo.createdAt}
        </div>
      </div>
      <button
        className="delete-btn"
        onClick={onDelete}
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;