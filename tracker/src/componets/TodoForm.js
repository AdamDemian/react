import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  function handleTaskInputChange(e) {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (todo.task.trim()) {
    //   addTodo({ ...todo, id: uuid.v4() });
    //   //reset task input
    //   setTodo({ ...todo, task: "" });
    // }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="Add a todo!"
        name="task"
        type="text"
        value={input}
        onChange={handleTaskInputChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
