import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Clean the house",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Cook delicious food",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Go Shopping",
      isCompleted: false,
    },
  ]);
  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="todo-heading">
          <h1>My Todo App</h1>
        </div>
        <div className="todos">
          {todos.map((todo, index) => (
            <Todos todo={todo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
