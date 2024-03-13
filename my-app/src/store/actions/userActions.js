import { toast } from "react-toastify";
import { API } from "../../api/api";
import { FETCH_STATES } from "../reducers/productReducer";
import {
  LOG_OUT,
  SET_USER,
  SET_USER_FETCH_STATE,
} from "../reducers/userReducer";
import { setFetchState } from "./productActions";

export const login = (data, history) => (dispatch) => {
  dispatch(setFetchState(FETCH_STATES.FETCHING));
  API.post("/login", data)
    .then((res) => {
      dispatch(setUser(res.data));
      dispatch(setUserFetchState(FETCH_STATES.FETCHED));
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      history.push("/");
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      //console.log(err);
      dispatch(setFetchState(FETCH_STATES.FETCH_FAILED));
    });
};

export const verify = () => (dispatch) => {
  API.get("/verify")
    .then((res) => {
      //console.log(res);
      dispatch(setUser(res.data));
      dispatch(setUserFetchState(FETCH_STATES.FETCHED));
      localStorage.setItem("token", res.data.token);
      toast.success("Welcome Back!");
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      localStorage.removeItem("token");
    });
};

export const logout = () => (dispatch) => {
  dispatch(setLogOut());
  localStorage.removeItem("token");
  toast.info("Succesfully Logged Out!");
};

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const setUserFetchState = (fetchState) => {
  return {
    type: SET_USER_FETCH_STATE,
    payload: fetchState,
  };
};

export const setLogOut = () => {
  return {
    type: LOG_OUT,
  };
};
