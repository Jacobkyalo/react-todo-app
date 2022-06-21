import React from "react";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={onDelete} />
      ))}
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
