import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  return (
    <div>
      <h1 className='main-title'>Todo List</h1>
      <hr /><br />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App
