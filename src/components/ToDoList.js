import React from "react";
import PropTypes from "prop-types";
import ToDoNode from "./ToDoNode";

function ToDoList({ toDoList, updateTask, deleteTask }) {
  return (
    <div className="todo-list">
      {toDoList.map((todo) => (
        <ToDoNode
          key={todo._id}
          todo={todo}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

ToDoList.propTypes = {
  toDoList: PropTypes.array,
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default ToDoList;
