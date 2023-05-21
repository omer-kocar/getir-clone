import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItem from "./reducers/cartItem";

const reducers = combineReducers({
  //cartItems
  cartItem: cartItem,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
