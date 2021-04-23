// import React, { useState } from "react";
import "./App.css";
// import TodoForm from "./componets/TodoForm";
import TodoList from "./componets/TodoList";

function App() {
  // const [todos, setTodos] = useState([]);

  // function addTodo(todo) {
  //   setTodos([todo, ...todos]);
  // }

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
