import React, { useState } from "react";
import PropTypes from "prop-types";

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

    updateTask(newTask);
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

      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
      />
      <label>
        <strong>Status: </strong>
        <select
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}>
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

        {todo.status}
      </label>
      <button onClick={() => onTaskUpdate()}>Save</button>
      <button onClick={() => onTaskDelete()}>Delete</button>
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
