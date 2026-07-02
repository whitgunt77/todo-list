import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];

function App() {
  const [todoList] = useState(todos);

  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App
