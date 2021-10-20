import { FETCH_TASKS } from "../ActionTypes";

export const fetchTasks = () => (dispatch) => {
  const data = require("../../../data.json");

  dispatch({
    type: FETCH_TASKS,
    payload: data,
  });
};
