import {
  REMOVE_PRODUCT,
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

export const removeProduct = (productId) => {
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
