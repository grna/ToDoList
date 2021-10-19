import React from "react";
import PropTypes from "prop-types";
import ToDoNode from "./ToDoNode";

function ToDoList({ toDoList }) {
  return toDoList.length === 0 ? (
    <div>Nothing to dooo...</div>
  ) : (
    <div className="todo-list">
      {toDoList.map((todo) => (
        <ToDoNode key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

ToDoList.propTypes = {
  toDoList: PropTypes.array,
};

export default ToDoList;
