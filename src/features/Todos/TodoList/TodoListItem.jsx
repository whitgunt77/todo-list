import { useEditableTitle } from '../../../hooks/useEditableTitle.js';
import TextInputWithLabel from '../../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../../utils/todoValidation';

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  // Call hook unconditionally to satisfy Rules of Hooks. Use a safe default title when todo is missing.
  const { isEditing, workingTitle, startEditing, cancelEdit, updateTitle, finishEdit } = useEditableTitle(todo?.title ?? '');
  if (!todo) return null;

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!isEditing) return;

    const finalTitle = finishEdit();
    onUpdateTodo({ ...todo, title: finalTitle });
  };

  return (
    <li className='list-item'>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel 
              elementId={`edit-${todo.id}`}
              labelText="Edit"
              value={workingTitle}
              onChange={(e) => updateTitle(e.target.value)}
            />
            <button type="button" onClick={cancelEdit}>Cancel</button>
            <button type="button" onClick={handleUpdate} disabled={!isValidTodoTitle(workingTitle)}>Update</button>
          </>
        ) : (
          <>
            <input
              className='checkbox'
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo.id)}
            />
            <span onClick={startEditing}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;