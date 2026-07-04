function TodoListItem({ todo, onCompleteTodo }) {
    return (
        <li className="list-item">
            <input
                type="checkbox"
                className="checkbox"
                checked={todo.isCompleted}
                onChange={() => onCompleteTodo(todo.id)}
            />
            {todo.title}
        </li>
    );
}

export default TodoListItem;