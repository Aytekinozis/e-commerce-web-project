import { useDispatch } from "react-redux";
import { API } from "../../api/api";
import {
  SET_CATEGORIES,
  SET_CAT_FETCH_STATE,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
} from "../reducers/globalReducer";
import { FETCH_STATES } from "../reducers/productReducer";

export const getRoles = () => (dispatch) => {
  API.get("/roles")
    .then((res) => {
      //console.log(res.data);
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCategories = () => (dispatch) => {
  dispatch(setCategoriesFetchState(FETCH_STATES.FETCHING));
  API.get("/categories")
    .then((res) => {
      //console.log(res.data);
      dispatch(setCategories(res.data));
      dispatch(setCategoriesFetchState(FETCH_STATES.FETCHED));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setCategoriesFetchState(FETCH_STATES.FETCH_FAILED));
    });
};

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};
export const setCategoriesFetchState = (catFetchState) => {
  return {
    type: SET_CAT_FETCH_STATE,
    payload: catFetchState,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
