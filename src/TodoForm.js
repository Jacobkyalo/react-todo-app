import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || value.length <= 4) {
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Add Todo Here</h3>
      <input
        type="text"
        placeholder="Add Todo Here..."
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Add Todo" id="submit" />
    </form>
  );
};

export default TodoForm;
