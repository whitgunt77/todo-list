import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList/TodoList";

function TodosPage({ token }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  useEffect(() => {
    if (!token) return;

    const fetchTodos = async () => {
      setIsTodoListLoading(true);
      setError("");
      try {
        const response = await fetch("/api/tasks", {
          method: "GET",
          headers: { "X-CSRF-TOKEN": token, credentials: "include" },
        });

        if (response.status === 401) throw new Error("Unauthorized");
        if (!response.ok) throw new Error("Failed to fetch tasks");

        const data = await response.json();
        const validTasks = Array.isArray(data.tasks) ? data.tasks.filter(t => t && t.id) : [];
        setTodoList(validTasks);
      } catch (err) {
        setError(`Error: ${err.message}`);
      } finally {
        setIsTodoListLoading(false);
      }
    };

    fetchTodos();
  }, [token]);

  const addTodo = async (todoTitle) => {
    const tempTodo = { id: Date.now(), title: todoTitle, isCompleted: false, priority: "medium" };
    setTodoList((prev) => [tempTodo, ...prev]);

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
          credentials: "include",
        },
        body: JSON.stringify({ title: todoTitle, isCompleted: false }),
      });
      if (!response.ok) throw new Error("Failed to add task");
      const data = await response.json();

      setTodoList((prev) => prev.map((t) => (t.id === tempTodo.id && data.task ? data.task : t)));
    } catch (err) {
      setTodoList((prev) => prev.filter((t) => t && t.id !== tempTodo.id));
      setError("Failed to add todo.", err);
    }
  };

  const completeTodo = async (id) => {
    const originalList = [...todoList];
    setTodoList((prev) =>
      prev.filter(t => t && t.id).map((t) => t.id === id ? { ...t, isCompleted: true } : t)
    );

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
          credentials: "include",
        },
        body: JSON.stringify({ isCompleted: true }),
      });
      if (!response.ok) throw new Error("Failed to complete task");
    } catch (err) {
      setTodoList(originalList);
      setError("Failed to update task status", err);
    }
  };

  const updateTodo = async (editedTodo) => {
    const originalList = [...todoList];
    setTodoList((prev) =>
      prev.map((t) => (t && t.id === editedTodo.id ? editedTodo : t)),
    );

    try {
      const response = await fetch(`/api/tasks/${editedTodo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
          credentials: "include",
        },
        body: JSON.stringify({
          title: editedTodo.title,
          isCompleted: editedTodo.isCompleted,
        }),
      });
      if (!response.ok) throw new Error("Failed to update task");
    } catch (err) {
      setTodoList(originalList);
      setError("Failed to update task title.", err);
    }
  };

  return (
    <div>
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
          <button onClick={() => setError("")}>Clear Error</button>
        </div>
      )}
      {isTodoListLoading && <p>Loading todos...</p>}

      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default TodosPage;
