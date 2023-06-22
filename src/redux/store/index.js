import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootStore } from "./combine";
import thunk from "redux-thunk";
import { rootReducers } from "../reducers";

export const store = createStore(
  rootStore,
  applyMiddleware(thunk)
);
