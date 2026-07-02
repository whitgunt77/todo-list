function TodoForm() {
    return (
        <form className="todo-form">
            <label className="todoTitle" htmlFor="todoTitle"><strong>Add New Todo:</strong></label>
            <input className="todoInput" type="text" id="todoTitle" />
            <button className="add-btn" type="submit" onClick={() => alert("Todo added!")}>Add Todo</button>
        </form>
    );
}

export default TodoForm;