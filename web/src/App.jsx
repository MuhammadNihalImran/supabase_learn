import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (!title.trim()) return;
    axios.post("http://localhost:5000/todos", { title }).then((res) => {
      setTodos([...todos, res.data]);
      setTitle("");
    });
  };

  const toggleTodo = (id, completed) => {
    axios
      .put(`http://localhost:5000/todos/${id}`, { completed: !completed })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          ✅ My To-Do App
        </h1>

        {/* Input Section */}
        <div className="flex mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-r-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm"
            >
              <span
                onClick={() => toggleTodo(todo.id, todo.completed)}
                className={`cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.title}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
