import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Clean the house",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Cook delicious food and clean the kitchen",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Go Shopping",
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="app-heading">
          <h1>My Todo App</h1>
        </div>
        <div className="todo-form">
          <TodoForm addTodo={addTodo} />
        </div>
        <Todos todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
