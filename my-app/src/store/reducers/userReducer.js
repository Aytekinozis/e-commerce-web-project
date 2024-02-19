const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAMES":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
