import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  if (!todoList || todoList.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
    <div className="todo-list-container">
      <h2 className="list-title">My Tasks:</h2>
      <ul className="todo-list">
        {todoList.map((todo) =>
          todo && (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          )
        )}
      </ul>
    </div>
  );
}
