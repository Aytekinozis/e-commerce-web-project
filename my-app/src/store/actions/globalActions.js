import { useDispatch } from "react-redux";
import { API } from "../../api/api";
import {
  SET_CATEGORIES,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
} from "../reducers/globalReducer";

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
