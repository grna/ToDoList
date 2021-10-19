import React from "react";
import PropTypes from "prop-types";

function ToDoNode({ todo }) {
  return (
    <div className="todo-node">
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <p>
        <strong>Status: </strong>
        {todo.status}
      </p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

ToDoNode.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

export default ToDoNode;
