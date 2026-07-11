import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onUpdateTodo, onCompleteTodo }) {
  return (
    <div className="todo-list-container">
      <h2 className="list-title">My Tasks:</h2>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onCompleteTodo={onCompleteTodo} />
        )
        )}
      </ul>
    </div>
  );
}

export default TodoList;