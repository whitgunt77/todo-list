function TodoForm() {
    return (
        <form className="todo-form">
            <label className="todoTitle" htmlFor="todoTitle"><strong>Add New Todo:</strong></label>
            <input className="todoInput" type="text" id="todoTitle" />
            <button className="add-btn" type="submit" disabled>Add Todo</button>
        </form>
    );
}

export default TodoForm;