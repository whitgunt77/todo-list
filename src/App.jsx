import { useState } from 'react';
import './index.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';

const todos = [
  { id: 1, title: "review resources" },
  { id: 2, title: "take notes" },
  { id: 3, title: "code out app" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  const addTodo = (newTitle) => {
    const newTodo = { id: Date.now(), title: newTitle };
    setTodoList([...todoList, newTodo]);
  };

  const updateTodo = (editedTodo) => {
    const updatedTodos = todoList.map((todo) => todo.id === editedTodo.id ? { ...todo, ...editedTodo } : todo);
    setTodoList(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todoList.map(t =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodoList(updatedTodos);
  };

  return (
    <div className='container'>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onUpdateTodo={updateTodo} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;