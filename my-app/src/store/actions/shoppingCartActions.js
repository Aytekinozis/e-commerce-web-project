import { toast } from "react-toastify";
import {
  REMOVE_PRODUCT,
  SET_ADDRESS,
  SET_CART,
  SET_CHECKED,
  SET_DOWN_COUNT,
  SET_PAYMENT,
} from "../reducers/shoppingCartReducer";

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
