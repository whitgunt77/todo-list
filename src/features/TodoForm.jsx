import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx';
import { isValidTodoTitle } from '../utils/todoValidation.js';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidTodoTitle(workingTodoTitle)) {
      onAddTodo(workingTodoTitle);
      setWorkingTodoTitle('');
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <TextInputWithLabel
        elementId="newTodo"
        labelText="Todo"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
      />
      <button type='submit' className='add-btn' disabled={!isValidTodoTitle(workingTodoTitle)}>Add Todo</button>
    </form>
  );
}

export default TodoForm;