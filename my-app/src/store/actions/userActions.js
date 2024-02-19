import { SET_USER } from "../reducers/userReducer";

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};
