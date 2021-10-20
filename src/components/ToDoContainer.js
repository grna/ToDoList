import React from "react";
import PropTypes from "prop-types";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";
import "../styles/todo.css";

const ToDoContainer = ({ tasks }) => {
  const notStartedTasks = tasks.filter((todo) => {
    return todo.status === "not started";
  });

  const inProgressTasks = tasks.filter((todo) => {
    return todo.status === "in progress";
  });

  const doneTasks = tasks.filter((todo) => {
    return todo.status === "done";
  });

  return (
    <div className="container">
      <div className="not-started column">
        <h3>Not Started</h3>
        {notStartedTasks.length > 0 ? (
          <ToDoList
            className="not-started"
            toDoList={notStartedTasks}></ToDoList>
        ) : (
          <div></div>
        )}
      </div>
      <div className="in-progress column">
        <h3>In Progress</h3>
        {inProgressTasks.length > 0 ? (
          <ToDoList
            className="in-progress"
            toDoList={inProgressTasks}></ToDoList>
        ) : (
          <div></div>
        )}
      </div>
      <div className="done column">
        <h3>Done</h3>
        {doneTasks.length > 0 ? (
          <ToDoList className="done" toDoList={doneTasks}></ToDoList>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

ToDoContainer.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  tasks: state.fromTasks.tasks,
});

export default connect(mapStateToProps, {})(ToDoContainer);
