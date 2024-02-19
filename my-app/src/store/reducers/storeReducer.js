const initialState = {
  sellerStore: [],
};

export const SET_STORE = "SET_STORE";

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        sellerStore: [...state.sellerStore, action.payload],
      };

    default:
      return state;
  }
};
