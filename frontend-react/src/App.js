import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoStats from './components/TodoStats/TodoStats';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toLocaleString()
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Todo Master</h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        {totalTodos > 0 && (
          <>
            <TodoStats
              total={totalTodos}
              active={activeTodos}
              completed={completedTodos}
            />
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
            />
          </>
        )}

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          filter={filter}
          totalTodos={totalTodos}
        />

        {totalTodos > 0 && (
          <button className="clear-all-btn" onClick={clearAllTodos}>
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}

export default App;