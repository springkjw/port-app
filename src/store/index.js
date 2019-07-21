import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import reducer from "./reducer";
 
const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__
    })
  )
];

const composeEnhancers =
  (__DEV__ &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancers(...enhancers);

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
