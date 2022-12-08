import { combineReducers } from "redux";
import { counterSliceReducer } from "./counter";
import { userReucer } from "./users";

export const rootReducer = combineReducers({
    counter: counterSliceReducer,
    user: userReucer
})