import React from "react";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="todos">
      {todos.length > 0
        ? todos.map((todo, index) => (
            <Todo todo={todo} key={index} onDelete={onDelete} />
          ))
        : "No todos yet...!"}
    </div>
  );
};

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <p className="item">{todo.text}</p>
      <span className="close" onClick={() => onDelete(todo.id)}>
        &times;
      </span>
    </div>
  );
};

export default Todos;
