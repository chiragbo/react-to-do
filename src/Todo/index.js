import React from "react";
import "./index.css";
const Todo = ({
  todo: { id, todo, isCompleted },
  handleDelete,
  handleComplete,
}) => {
  return (
    <div className="single-todo">
      <span className="task">{isCompleted ? <s>{todo}</s> : todo}</span>
      <span className="chk-box">
        <input type={"checkbox"} onChange={(e) => handleComplete(id)}></input>
      </span>
      {isCompleted ? (
        <span className="btn-delete">
          <button className="delete-bnt" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </span>
      ) : (
        <span className="btn-delete"></span>
      )}
    </div>
  );
};
export default Todo;
