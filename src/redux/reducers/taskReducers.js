import {
  ADD_TASK,
  UPDATE_TASK,
  FETCH_TASKS,
  DELETE_TASK,
} from "../ActionTypes";

export const tasksReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { tasks: action.payload };
    case ADD_TASK:
      return { tasks: action.payload };
    case UPDATE_TASK:
      return {
        tasks: action.payload,
      };
    case DELETE_TASK:
      return { tasks: action.payload };
    default:
      return state;
  }
};
