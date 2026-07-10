function TodoListItem({ todo }) {
  return (
    <li className="list-item">
      {todo.title}
    </li>
  );
}

export default TodoListItem;