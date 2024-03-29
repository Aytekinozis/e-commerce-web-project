import { FETCH_STATES } from "./productReducer";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_CAT_FETCH_STATE = "SET_CAT_FETCH_STATE";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

const initialState = {
  roles: [],
  categories: [],
  catFetchState: FETCH_STATES.NOT_FETCHED,
  theme: "",
  language: "",
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CAT_FETCH_STATE:
      return {
        ...state,
        catFetchState: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
