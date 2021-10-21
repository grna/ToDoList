import React from "react";
import PropTypes from "prop-types";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";
import "../styles/todo.css";
import {
  addNewTask,
  updateTask,
  deleteTask,
} from "../redux/actions/tasksActions";

const ToDoContainer = ({ tasks, addNewTask, updateTask, deleteTask }) => {
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
        <div className="todo-header">
          <h3>Not Started</h3>
          <button className="todo-add-btn" onClick={() => addNewTask()}>
            +
          </button>
        </div>
        {notStartedTasks.length > 0 ? (
          <ToDoList
            className="not-started"
            toDoList={notStartedTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}></ToDoList>
        ) : (
          <div></div>
        )}
      </div>
      <div className="in-progress column">
        <div className="todo-header">
          <h3>In Progress</h3>
        </div>
        {inProgressTasks.length > 0 ? (
          <ToDoList
            className="in-progress"
            toDoList={inProgressTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}></ToDoList>
        ) : (
          <div></div>
        )}
      </div>
      <div className="done column">
        <div className="todo-header">
          <h3>Done</h3>
        </div>
        {doneTasks.length > 0 ? (
          <ToDoList
            className="done"
            toDoList={doneTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}></ToDoList>
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
  addNewTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => ({
  tasks: state.fromTasks.tasks,
});

export default connect(mapStateToProps, { addNewTask, updateTask, deleteTask })(
  ToDoContainer
);
