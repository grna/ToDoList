import React from "react";
//import PropTypes from "prop-types";
import ToDoList from "./ToDoList";
import "../styles/todo.css";

function ToDoContainer() {
  const data = require("../../data.json");

  console.log(typeof data);

  const notStarted = data.data.filter((todo) => {
    return todo.status === "not started";
  });

  const inProgress = data.data.filter((todo) => {
    return todo.status === "in progress";
  });

  const done = data.data.filter((todo) => {
    return todo.status === "done";
  });

  return (
    <div className="container">
      <div className="not-started column">
        <h3>Not Started</h3>
        <ToDoList className="not-started" toDoList={notStarted}></ToDoList>
      </div>
      <div className="in-progress column">
        <h3>In Progress</h3>
        <ToDoList className="in-progress" toDoList={inProgress}></ToDoList>
      </div>
      <div className="done column">
        <h3>Done</h3>
        <ToDoList className="done" toDoList={done}></ToDoList>
      </div>
    </div>
  );
}

ToDoContainer.propTypes = {};

export default ToDoContainer;
