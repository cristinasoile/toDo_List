import React, { useState } from 'react';
import NewTodo from './components/Newtodo';
import TodoList from './components/TodoList';

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('tasks');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // função para salvar no LocalStorage
  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('tasks', JSON.stringify(newTodos));
  };

  // Substitui as chamadas a 'setTodos' pela nova função updateTodos.
  const onNewTodo = (value) => {
    updateTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };
  const onToggle = (todo) => {
    updateTodos(
      // ele faz um map da lista, compara o id do obj se for ele traz todos e inverte o checked
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    updateTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title"> To Do List!</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
}

export default App;
