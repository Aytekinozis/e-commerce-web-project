const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      break;

    default:
      return state;
  }
};
