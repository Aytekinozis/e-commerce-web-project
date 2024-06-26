import { toast } from "react-toastify";
import {
  REMOVE_PRODUCT,
  RESET_CART,
  SET_ADDRESS,
  SET_CART,
  SET_CHECKED,
  SET_DOWN_COUNT,
  SET_PAYMENT,
} from "../reducers/shoppingCartReducer";
import { API } from "../../api/api";

export const setCart = (cart) => {
  toast.success("Product Added To Cart", {
    position: "top-center",
    autoClose: 1000,
  });
  return {
    type: SET_CART,
    payload: cart,
  };
};

export const removeProduct = (productId) => {
  toast.warn("Product Removed From Cart", {
    position: "top-center",
    autoClose: 1000,
  });
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};

export const countDownProduct = (productId) => {
  toast.warn("Product Count Decreased By 1", {
    position: "top-center",
    autoClose: 1000,
  });
  return {
    type: SET_DOWN_COUNT,
    payload: productId,
  };
};

export const cartReset = () => {
  return {
    type: RESET_CART,
  };
};

export const getAddress = () => (dispatch) => {
  API.get("/user/address")
    .then((res) => {
      console.log(res);
      dispatch(setAdress(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
};

export const getPayment = () => (dispatch) => {
  API.get("/user/card")
    .then((res) => {
      console.log(res);
      dispatch(setPayment(res.data));
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
};

export const setChecked = (id, check) => {
  return {
    type: SET_CHECKED,
    payload: { id, check },
  };
};

export const setPayment = (payment) => {
  return {
    type: SET_PAYMENT,
    payload: payment,
  };
};

export const setAdress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: address,
  };
};
