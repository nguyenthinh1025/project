import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { gioHangReducer } from "./reducer/gioHangReducer";

const rootReducer = combineReducers({
  gioHangReducer,
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare);

export const store = createStore(rootReducer, composeCustom);
