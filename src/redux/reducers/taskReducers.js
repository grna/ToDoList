import { FETCH_TASKS } from "../ActionTypes";

export const tasksReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { tasks: action.payload };
    default:
      return state;
  }
};
