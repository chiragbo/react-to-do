import Todo from "../Todo";
import React from "react";
import PropTypes from "prop-types";

import "./index.css";
const TodoList = ({ todoList, handleComplete, handleDelete }) => {
  return (
    <div className="dispaly-todos">
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;
