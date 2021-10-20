import { FETCH_TASKS, ADD_TASK } from "../ActionTypes";
import shortid from "shortid";

export const fetchTasks = () => (dispatch) => {
  const data = require("../../../data.json");

  dispatch({
    type: FETCH_TASKS,
    payload: data,
  });
};

export const addNewTask = () => (dispatch, getState) => {
  const newTask = {
    _id: shortid.generate().toString(),
    title: "",
    description: "",
    status: "not started",
  };

  const tasks = getState().fromTasks.tasks;
  const newTaskArray = [...tasks, newTask];

  dispatch({
    type: ADD_TASK,
    payload: newTaskArray,
  });
};
