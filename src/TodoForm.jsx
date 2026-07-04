import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (workingTodoTitle.trim()) {
      onAddTodo(workingTodoTitle);
      setWorkingTodoTitle(''); // Reset via state
    }
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <label className="todoTitle" htmlFor="todoTitle">
        <strong>Add New Todo:</strong>
      </label>
      <input 
        className="todoInput" 
        type="text" 
        id="todoTitle" 
        name="todoTitle"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
        placeholder="Enter a task..."
        required 
      />
      <button 
        className="add-btn" 
        type="submit" 
        disabled={!workingTodoTitle.trim()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;