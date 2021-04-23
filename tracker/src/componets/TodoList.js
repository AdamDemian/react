import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // this will add a new todo
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const addNewTodo = [todo, ...todos];

    setTodos(addNewTodo);
  }

  //this will update a todo
  function updateTodo(todoId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  }

  // this will remove todo when close icon will be clicked
  function removeTodo(id) {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  }

  // this will show a todo
  function completeTodo(id) {
    let uppdatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(uppdatedTodos);
  }

  return (
    <div>
      <h1>What's the plan?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
