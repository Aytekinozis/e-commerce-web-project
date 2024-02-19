import { SET_STORE } from "../reducers/storeReducer";

export const setStore = (data) => {
  return {
    type: SET_STORE,
    payload: data,
  };
};
