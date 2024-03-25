import { toast } from "react-toastify";
import {
  REMOVE_PRODUCT,
  SET_ADDRESS,
  SET_CART,
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
  toast.warn("Product Removed From Cart", { autoClose: 1000 });
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
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
