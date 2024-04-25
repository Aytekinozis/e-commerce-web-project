const initialState = {
  cart: [],
  payment: [],
  address: {},
};

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SET_CHECKED = "SET_CHECKED";
export const SET_DOWN_COUNT = "SET_DOWN_COUNT";

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const productIndex = state.cart.findIndex(
        (product) => product.product.id === action.payload.id
      );

      if (productIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[productIndex].count++;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: { ...action.payload } },
          ],
        };
      }
    case REMOVE_PRODUCT:
      const remainingCart = state.cart.filter(
        (product) => product.product.id !== action.payload
      );
      return {
        ...state,
        cart: remainingCart,
      };
    case SET_CHECKED:
      const checkIndex = state.cart.findIndex(
        (product) => product.product.id === action.payload.id
      );

      const updatedCart = [...state.cart];
      updatedCart[checkIndex].checked = action.payload.check;
      return {
        ...state,
        cart: updatedCart,
      };

    case SET_DOWN_COUNT:
      const downIndex = state.cart.findIndex(
        (product) => product.product.id === action.payload
      );

      const newCart = [...state.cart];
      newCart[downIndex].count--;
      return {
        ...state,
        cart: newCart,
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};
