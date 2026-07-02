import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
    const inputRef = useRef();

    const handleAddTodo = (event) => {
        event.preventDefault();

        const todoTitle = event.target.todoTitle.value.trim();

        if (todoTitle) {
            onAddTodo(todoTitle);
            event.target.reset();
            inputRef.current.focus();
        }
    };

    return (
        <form className="todo-form" onSubmit={handleAddTodo}>
            <label className="todoTitle" htmlFor="todoTitle"><strong>Add New Todo:</strong></label>
            <input ref={inputRef} className="todoInput" type="text" id="todoTitle" name='todoTitle' placeholder='Enter a task...' required />
            <button className="add-btn" type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;