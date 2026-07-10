import { useState } from 'react';
import './App.css';
import TodoList from './features/Todos/TodoList/TodoList';
import TodoForm from './features/Todos/TodoForm';

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;