import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { userReducer } from "./reducers/userReducer";
import { storeReducer } from "./reducers/storeReducer";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  userData: userReducer,
  storeData: storeReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
