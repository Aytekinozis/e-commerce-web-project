import { toast } from "react-toastify";
import { API } from "../../api/api";
import { FETCH_STATES } from "../reducers/productReducer";
import { SET_USER } from "../reducers/userReducer";
import { setFetchState } from "./productActions";

export const login = (data, history) => (dispatch) => {
  dispatch(setFetchState(FETCH_STATES.FETCHING));
  API.post("/login", data)
    .then((res) => {
      dispatch(setUser(res.data));
      dispatch(setFetchState(FETCH_STATES.FETCHED));
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

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};
