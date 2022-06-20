import React from "react";

function Todos({ todo }) {
  return (
    <div>
      <p>{todo.text}</p>
    </div>
  );
}

export default Todos;
