import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../utils/todoValidation';

function TodoListItem({ todo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (isValidTodoTitle(workingTitle)) {
      onUpdateTodo({ ...todo, title: workingTitle });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <TextInputWithLabel
            elementId={`edit-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={(e) => setWorkingTitle(e.target.value)}
          />
          <button type='button' onClick={handleUpdate} disabled={!isValidTodoTitle(workingTitle)}>Update</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <span onClick={() => setIsEditing(true)}>{todo.title}</span>
      )}
    </li>
  );
}

export default TodoListItem;