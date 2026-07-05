import { useEditableTitle } from '../../hooks/useEditableTitle';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../utils/todoValidation';

export default function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const { isEditing, workingTitle, startEditing, cancelEdit, updateTitle, finishEdit } = useEditableTitle(todo.title);

  const handleUpdate = (event) => {
    event.preventDefault();
    const finalTitle = finishEdit();
    onUpdateTodo({ ...todo, title: finalTitle });
  };

  return (
    <li>
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
            <button type="submit" disabled={!isValidTodoTitle(workingTitle)}>Update</button>
          </>
        ) : (
          <>
            <input
              className='checkbox'
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo.id)}
            />
            <span className='list-item' onClick={startEditing}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}