import { FETCH_STATES } from "./productReducer";

const initialState = {
  user: {},
  fetchState: FETCH_STATES.NOT_FETCHED,
  hashCode: "b7c0289d334a8e337679f99e1a41d36fc4b9b99e6b922b68cd6c669b4303917c",
};

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";
export const SET_HASH_CODE = "SET_HASH_CODE";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_HASH_CODE:
      return { ...state, hashCode: action.payload };
    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
