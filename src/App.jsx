import { useState } from 'react';
import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/Todos/TodoForm';

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  const updateTodo = (editedTodo) => {
    const updatedTodos = todoList.map((todo) => todo.id === editedTodo.id ? editedTodo : todo);
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm />
      <TodoList todoList={todoList} onUpdateTodo={updateTodo} />
    </div>
  );
}

export default App;