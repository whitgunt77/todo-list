import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  if (!todoList || todoList.length === 0) {
    return <p>No tasks to display.</p>;
  }

  const filteredTodoList = todoList?.filter((todo) => todo && !todo.isCompleted) || [];

  return (
    <div className="todo-list-container">
      <h2 className="list-title">Tasks to Complete:</h2>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul className="todo-list">
          {filteredTodoList.map(
            (todo) =>
              todo && (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onCompleteTodo={onCompleteTodo}
                  onUpdateTodo={onUpdateTodo}
                />
              ),
          )}
        </ul>
      )}
    </div>
  );
}
