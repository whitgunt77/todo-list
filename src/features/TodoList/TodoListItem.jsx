import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../utils/todoValidation';

function TodoListItem({ todo, onUpdateTodo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!isEditing) return;

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
     <form onSubmit={handleUpdate}>
      {isEditing ? (
        <>
          <TextInputWithLabel
            elementId={`edit-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={(e) => setWorkingTitle(e.target.value)}
          />
          <button type='submit' disabled={!isValidTodoTitle(workingTitle)}>Update</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <label>
            <input
              type='checkbox'
              checked={todo.isCompleted || false}
              onChange={() => onCompleteTodo(todo.id)}
            />
          </label>
          <span className='list-item' onClick={() => setIsEditing(true)}>{todo.title}</span>
        </>
      )}
     </form>
    </li>
  );
}

export default TodoListItem;