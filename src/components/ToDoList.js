import React from "react";
import PropTypes from "prop-types";
import ToDoNode from "./ToDoNode";

function ToDoList({ toDoList, updateTask }) {
  return (
    <div className="todo-list">
      {toDoList.map((todo) => (
        <ToDoNode key={todo._id} todo={todo} updateTask={updateTask} />
      ))}
    </div>
  );
}

ToDoList.propTypes = {
  toDoList: PropTypes.array,
  updateTask: PropTypes.func,
};

export default ToDoList;
