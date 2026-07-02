import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };
    setTodoList((previous) => [newTodo, ...previous]);
  };

  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App
