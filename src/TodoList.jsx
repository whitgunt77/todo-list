function TodoList() {
    const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
  ];

  return (
    <div className="todo-list-container">
    <h2 className="list-title">Tasks to Complete:</h2>
      <ul className="todo-list">
        {todoList.map((todo) => (
            <li className="list-item" key={todo.id}>
              <input type="checkbox" className="checkbox" />
              {todo.title}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
