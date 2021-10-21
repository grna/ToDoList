import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tasksReducers } from "./reducers/taskReducers";

const initialState = {
  fromTasks: {
    tasks: [],
  },
};
const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    fromTasks: tasksReducers,
  }),
  initialState,
  composeEnhanser(applyMiddleware(thunk))
);

export default store;
