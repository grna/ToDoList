import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../ActionTypes";
import shortid from "shortid";
import axios from "axios";

export const fetchTasks = () => (dispatch) => {
  const data = require("../../../data.json");

  dispatch({
    type: FETCH_TASKS,
    payload: data,
  });
};

export const addNewTask = () => async (dispatch, getState) => {
  const options = {
    method: "GET",
    headers: { "Accept-Encoding": "gzip, deflate, br" },
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  };

  axios(options)
    .then((res) => {
      const newTask = {
        _id: shortid.generate().toString(),
        title: res.data.drinks[0].strDrink,
        description: res.data.drinks[0].strInstructions,
        status: "not started",
      };

      const tasks = getState().fromTasks.tasks;
      const newTaskArray = [newTask, ...tasks];

      dispatch({
        type: ADD_TASK,
        payload: newTaskArray,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTask = (newTask) => (dispatch, getState) => {
  const tasks = getState().fromTasks.tasks.filter((t) => {
    return t._id !== newTask._id;
  });

  const newTaskArray = [newTask, ...tasks];

  dispatch({
    type: UPDATE_TASK,
    payload: newTaskArray,
  });
};

export const deleteTask = (id) => (dispatch, getState) => {
  const newTaskArray = getState().fromTasks.tasks.filter((t) => {
    return t._id !== id;
  });

  dispatch({
    type: DELETE_TASK,
    payload: newTaskArray,
  });
};
