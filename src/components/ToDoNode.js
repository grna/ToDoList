import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function ToDoNode({ todo, updateTask, deleteTask }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const onTaskUpdate = () => {
    const newTask = {
      _id: todo._id,
      title: title,
      description: description,
      status: status,
    };

    toast.success("Task has been updated.");
    try {
      updateTask(newTask);
    } catch (error) {
      toast.error("Update failed.");
    }
  };

  const onTaskDelete = () => {
    deleteTask(todo._id);
  };

  return (
    <div className="todo-node">
      <label>
        <strong>Title:</strong>
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />
      <label>
        <strong>Description:</strong>
      </label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={description}></textarea>
      <label>
        <strong>Status: </strong>
      </label>
      <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
        <option className="task-status" value="not started">
          Not Started
        </option>
        <option className="task-status" value="in progress">
          In Progress
        </option>
        <option className="task-status" value="done">
          Done!
        </option>
      </select>
      <div className="todo-buttons">
        <button className="btn-primary" onClick={() => onTaskUpdate()}>
          Save
        </button>
        <button className="btn-danger" onClick={() => onTaskDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
}

ToDoNode.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
  updateTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default ToDoNode;
