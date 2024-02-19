import {
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../reducers/shoppingCartReducer";

export const setCart = (cart) => {
  return {
    type: SET_CART,
    payload: cart,
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
