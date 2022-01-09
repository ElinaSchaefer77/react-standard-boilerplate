import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger"; // eslint-disable-line
// import reduxMiddleware from 'react-block-ui/lib/reduxMiddleware';
// import { reducer as toastrReducer } from "react-redux-toastr";
// import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const reducerPersistConfig = {
  key: "reducer",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  reducer: persistReducer(reducerPersistConfig, reducer),
  // toastr: toastrReducer,
  // form: formReducer,
});

export const store = createStoreWithMiddleware(rootReducer);
export const persistor = persistStore(store);
