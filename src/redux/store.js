import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchTasks } from "./actions/tasksActions";
import { tasksReducers } from "./reducers/taskReducers";

const initialState = {};
const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    fromTasks: tasksReducers,
  }),
  initialState,
  composeEnhanser(applyMiddleware(thunk))
);

store.dispatch(fetchTasks());

export default store;
