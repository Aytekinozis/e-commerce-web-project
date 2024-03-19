import { API } from "../../api/api";
import {
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
  SET_PAGE_COUNT,
  SET_PRODUCT_LIST,
  SET_PRODUCT_COUNT,
  FETCH_STATES,
} from "../reducers/productReducer";

export const getProducts = () => (dispatch) => {
  dispatch(setFetchState(FETCH_STATES.FETCHING));
  API.get("/products")
    .then((res) => {
      //console.log(res.data);
      dispatch(setProductList(res.data.products));
      dispatch(setTotalProductCount(res.data.total));
      dispatch(setPageCount(Math.ceil(res.data.total / 25)));
      dispatch(setFetchState(FETCH_STATES.FETCHED));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setFetchState(FETCH_STATES.FETCH_FAILED));
    });
};

export const filterProducts = (params) => (dispatch) => {
  dispatch(setFetchState(FETCH_STATES.FETCHING));
  API.get("/products", { params })
    .then((res) => {
      //console.log(params);
      dispatch(setProductList(res.data.products));
      dispatch(setTotalProductCount(res.data.total));
      dispatch(setPageCount(Math.ceil(res.data.total / 25)));
      dispatch(setFetchState(FETCH_STATES.FETCHED));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setFetchState(FETCH_STATES.FETCH_FAILED));
    });
};

export const setProductList = (products) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: products,
  };
};

export const setTotalProductCount = (pcount) => {
  return {
    type: SET_PRODUCT_COUNT,
    payload: pcount,
  };
};

export const setPageCount = (count) => {
  return {
    type: SET_PAGE_COUNT,
    payload: count,
  };
};

export const setActivePage = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: page,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
};
