import { combineReducers } from "redux";
import { counterSliceReducer } from "./counter";
import { counterPersistConfig, userPersistConfig, userReucer } from "./users";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
    counter: persistReducer(counterPersistConfig,counterSliceReducer),
    user: persistReducer(userPersistConfig,userReucer)
})