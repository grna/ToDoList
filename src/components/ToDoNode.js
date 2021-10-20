import React, { useState } from "react";
import PropTypes from "prop-types";

function ToDoNode({ todo, updateTask }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const onTaskUpdate = () => {
    const newTask = {
      _id: todo._id,
      title: title,
      description: description,
      status: todo.status,
    };

    updateTask(newTask);
  };

  const onTaskDelete = () => {};

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
        {todo.status}
      </label>
      <button onClick={() => onTaskUpdate()}>Update</button>
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
};

export default ToDoNode;
