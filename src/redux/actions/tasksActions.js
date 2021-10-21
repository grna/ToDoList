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

const createNewTask = ({ strDrink, strInstructions }) => {
  return {
    _id: shortid.generate().toString(),
    title: strDrink,
    description: strInstructions,
    status: "not started",
  };
};

export const addNewTask = () => async (dispatch, getState) => {
  const options = {
    method: "GET",
    headers: { "Accept-Encoding": "gzip, deflate, br" },
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  };

  axios(options)
    .then((res) => {
      const newTask = createNewTask(res.data.drinks[0]);
      let tasks = getState().fromTasks.tasks.slice();
      tasks = [newTask, ...tasks];

      dispatch({
        type: ADD_TASK,
        payload: tasks,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTask = (newTask) => (dispatch, getState) => {
  const tasks = getState().fromTasks.tasks.slice();
  const taskIndex = tasks.indexOf(tasks.find((t) => t._id === newTask._id));
  tasks.splice(taskIndex, 1, newTask);

  dispatch({
    type: UPDATE_TASK,
    payload: tasks,
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
