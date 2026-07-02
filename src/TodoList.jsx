import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <div className="todo-list-container">
    <h2 className="list-title">Tasks to Complete:</h2>
      <ul className="todo-list">
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
