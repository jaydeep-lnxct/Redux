import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer";
import persistStore from "redux-persist/es/persistStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export const persistor = persistStore(store);
