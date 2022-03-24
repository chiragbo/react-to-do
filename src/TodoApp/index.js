import React, { useState } from "react";
import TodoList from "../TodoList";
import "./index.css";
export const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function addTodo(event) {
    event.preventDefault();
    setTodoList([...todoList, { id: Date.now(), todo, isCompleted: false }]);
    setTodo("");
  }
  function handleComplete(id) {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  }
  function handleDelete(id) {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  }
  return (
    <div className="todo-from">
      <h2>Todo App</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Task"
        ></input>
        <button type="submit">Add</button>
      </form>
      <TodoList
        todoList={todoList}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};
