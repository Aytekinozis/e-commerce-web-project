import { FETCH_STATES, SET_FETCH_STATE } from "./productReducer";

const initialState = {
  user: {},
  fetchState: FETCH_STATES.NOT_FETCHED,
};

export const SET_USER = "SET_USER";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
