function TodoListItem({ todo }) {
    return (
        <li className="list-item">
            <input type="checkbox" className="checkbox" />
            {todo.title}
        </li>
    );
}

export default TodoListItem;