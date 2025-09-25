import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, filter, totalTodos }) => {
  const getEmptyMessage = () => {
    if (totalTodos === 0) return "No tasks yet!";
    if (filter === 'active') return "All tasks completed! 🎉";
    if (filter === 'completed') return "No completed tasks yet";
    return "No tasks found";
  };

  const getEmptySubMessage = () => {
    if (totalTodos === 0) return "Add your first task to get started";
    return "";
  };

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <div className="empty-text">{getEmptyMessage()}</div>
        <div className="empty-subtext">{getEmptySubMessage()}</div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
