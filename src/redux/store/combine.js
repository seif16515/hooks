import { combineReducers } from "redux";
import { cartReducer, productsReducer } from "../reducers/productReducer";
import { usersReducer } from "../reducers/user";
export const rootStore = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: usersReducer,
});
